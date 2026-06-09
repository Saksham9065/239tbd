import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Inquiry from "@/models/Inquiry";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const inquirySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  services: z.array(z.string()),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Validate input
    const validation = inquirySchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({ success: false, error: "Invalid input" }, { status: 400 });
    }

    // 2. Connect Database
    await connectDB();

    // 3. Save to MongoDB
    const newInquiry = await Inquiry.create(body);

    // 4. Send HTML Email
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
        to: process.env.ADMIN_EMAIL || 'your-email@example.com',
        subject: `New Inquiry from ${body.name}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6;">
            <h2 style="color: #F97316;">New Project Inquiry</h2>
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Services Interested In:</strong> ${body.services.join(", ") || "None"}</p>
            <p><strong>Message:</strong></p>
            <p style="background: #f4f4f4; padding: 15px; border-radius: 8px;">${body.message}</p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // We don't fail the request if the email sending specifically fails
    }

    return NextResponse.json({ success: true, message: "Inquiry saved!" }, { status: 201 });

  } catch (error) {
    console.error("CRITICAL API ERROR:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}