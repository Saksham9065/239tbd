import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect Admin Route
  if (pathname.startsWith('/admin')) {
    const auth = request.cookies.get('admin-auth');
    if (auth?.value !== process.env.ADMIN_SECRET_KEY) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // If you also want a protected User/Client dashboard
  if (pathname.startsWith('/dashboard')) {
    const userAuth = request.cookies.get('user-auth');
    if (!userAuth) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/dashboard/:path*'],
};