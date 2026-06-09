import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { password } = await req.json();

    if (password === process.env.ADMIN_SECRET_KEY) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    return NextResponse.json({ success: false }, { status: 401 });
  } catch { // Remove the (_) entirely
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}