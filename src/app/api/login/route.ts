import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const formData = await req.formData();
  const password = formData.get('password');

  if (password === 'super-secret-key') {
    const response = NextResponse.redirect(new URL('/admin/inquiries', req.url));
    response.cookies.set('admin-auth', 'super-secret-key', { 
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production' 
    });
    return response;
  }
  return NextResponse.redirect(new URL('/login', req.url));
}