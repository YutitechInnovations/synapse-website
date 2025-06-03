import { NextResponse } from 'next/server';

// List of protected routes that require authentication
const protectedRoutes = [
  '/home',
  '/rxtrack',
  '/orthosync',
  '/reward-program',
  '/alignmasters',
  '/e-shop',
  '/profile',
  '/settings'
];

export function middleware(request) {
  const isLoggedIn = request.cookies.get('mockLoggedIn')?.value === 'true';
  const { pathname } = request.nextUrl;

  // Check if the route is protected
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

  // If it's a protected route and user is not logged in, redirect to login
  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If user is logged in and tries to access login/signup pages, redirect to home
  if (isLoggedIn && (pathname === '/login' || pathname === '/signup')) {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
}; 