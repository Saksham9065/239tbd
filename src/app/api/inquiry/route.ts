import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Inquiry from "@/models/Inquiry";
import { Resend } from "resend";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string().optional(),
  services: z.array(z.string()).optional(),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Validate input
    const validation = inquirySchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { success: false, error: "Invalid input" },
        { status: 400 }
      );
    }

    // 2. Connect Database
    await connectDB();

    // 3. Save to MongoDB
    const { service, services, ...inquiryData } = body;
    await Inquiry.create({
      ...inquiryData,
      services: services && services.length > 0 ? services : service ? [service] : [],
    });

    // 4. Send HTML Email (Initialized here to avoid build-time errors)
    try {
      if (process.env.RESEND_API_KEY) {
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
          to: process.env.ADMIN_EMAIL || 'your-email@example.com',
          subject: `New Inquiry from ${body.name}`,
          html: `
            <div style="font-family: sans-serif; line-height: 1.6;">
              <h2 style="color: #F97316;">New Project Inquiry</h2>
              <p><strong>Name:</strong> ${body.name}</p>
              <p><strong>Email:</strong> ${body.email}</p>
              <p><strong>Mobile Number:</strong> ${body.phone || "Not provided"}</p>
              <p><strong>Services Interested In:</strong> ${body.service || "None"}</p>
              <p><strong>Message:</strong></p>
              <p style="background: #f4f4f4; padding: 15px; border-radius: 8px;">${body.message}</p>
            </div>
          `,
        });
      } else {
        console.warn("RESEND_API_KEY is missing, skipping email notification.");
      }
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }

    return NextResponse.json(
      { success: true, message: "Inquiry saved!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("CRITICAL API ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}