"use server";

import { connectDB } from "@/lib/mongodb";
import Inquiry from "@/models/Inquiry";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// Helper to verify if the user is actually logged in as admin
async function isAdmin() {
  const session = await getServerSession(authOptions);
  return session?.user?.role === "admin";
}

export async function deleteInquiry(id: string) {
  if (!(await isAdmin())) {
    throw new Error("Unauthorized");
  }

  await connectDB();
  await Inquiry.findByIdAndDelete(id);
  
  revalidatePath("/admin");
  revalidatePath("/admin/leads");
  return { success: true };
}

export async function toggleReadStatus(id: string, currentStatus: boolean) {
  if (!(await isAdmin())) {
    throw new Error("Unauthorized");
  }

  await connectDB();
  await Inquiry.findByIdAndUpdate(id, { isRead: !currentStatus });
  
  revalidatePath("/admin");
  revalidatePath("/admin/leads");
  return { success: true };
}