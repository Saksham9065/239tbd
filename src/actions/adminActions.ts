"use server";

import { cookies } from "next/headers";

export async function loginAdmin(password: string) {
  // Use the same environment variable name you set in Vercel
  if (password !== process.env.ADMIN_PASSWORD) {
    return { success: false, error: "Invalid password" };
  }

  // Set a secure cookie
  (await cookies()).set("admin_token", "true", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24, // 1 day
    path: "/",
  });

  return { success: true };
}