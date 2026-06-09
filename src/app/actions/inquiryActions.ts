"use server";

import { connectDB } from "@/lib/mongodb";
import Inquiry from "@/models/Inquiry";
import { revalidatePath } from "next/cache";

export async function deleteInquiry(id: string) {
  await connectDB();
  await Inquiry.findByIdAndDelete(id);
  // This tells Next.js to refresh the /admin page data
  revalidatePath("/admin");
}

export async function toggleReadStatus(id: string, currentStatus: boolean) {
  await connectDB();
  await Inquiry.findByIdAndUpdate(id, { isRead: !currentStatus });
  revalidatePath("/admin");
}