import { NextResponse } from "next/server";

export const PUBLIC_ROUTES = [
    "/login",
    "/privacy",
    "/welcome",
    "/education",
    "/faq",
    "/aboutus",
    "/blogs",
    "/signup",
    "/careers",
    "/admin",
    "/aligners",
    "/aligners-biosmart-sm",
    "/aligners-biosmart-t",
    "/forgot-password",
    "/admin-forgot-password",
    "/materials",
    "/research",
];
export const ADMIN_ROUTES = ["/admin/dashboard", "/admin/doctor-management", "/admin/reward-program"];

export const USER_ROUTES = [
    "/reward-program",
    "/alignmasters",
    "/orthosync",
    "/rxtrack",
    "/home"
];

const isPublicRoute = (path) =>
  PUBLIC_ROUTES.some((route) => path === route || path.startsWith(`${route}/`));

export default function middleware(req) {
  const path = req.nextUrl.pathname;
  const cookieHeader = req.headers.get("cookie") || "";
  const cookies = Object.fromEntries(
    cookieHeader.split("; ").map((c) => c.split("="))
  );

  const token = cookies["access_token"];
  if (!token && !isPublicRoute(path)) {
    return NextResponse.redirect(new URL("/welcome", req.nextUrl));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
