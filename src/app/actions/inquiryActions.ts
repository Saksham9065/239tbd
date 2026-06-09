"use server";

import { connectDB } from "@/lib/mongodb";
import Inquiry from "@/models/Inquiry";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

// Helper to verify if the user is actually logged in as admin
async function isAdmin() {
  const cookieStore = await cookies();
  return cookieStore.get("admin_token")?.value === "true";
}

export async function deleteInquiry(id: string) {
  if (!(await isAdmin())) {
    throw new Error("Unauthorized");
  }

  await connectDB();
  await Inquiry.findByIdAndDelete(id);
  
  // Refresh the dashboard data
  revalidatePath("/admin");
  return { success: true };
}

export async function toggleReadStatus(id: string, currentStatus: boolean) {
  if (!(await isAdmin())) {
    throw new Error("Unauthorized");
  }

  await connectDB();
  await Inquiry.findByIdAndUpdate(id, { isRead: !currentStatus });
  
  // Refresh the dashboard data
  revalidatePath("/admin");
  return { success: true };
}