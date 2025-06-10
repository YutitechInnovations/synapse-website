import { NextResponse } from "next/server";
import { PUBLIC_ROUTES } from "./middleware.constant";

const isPublicRoute = (path) =>
  PUBLIC_ROUTES.some((route) => path === route || path.startsWith(`${route}/`));

export default function middleware(req) {
  const path = req.nextUrl.pathname;
  console.log(`[MIDDLEWARE] Checking path: ${path}`);

  const cookieHeader = req.headers.get("cookie") || "";
  const cookies = Object.fromEntries(
    cookieHeader.split("; ").map((c) => c.split("="))
  );

  const token = cookies["access_token"];
  console.log("[MIDDLEWARE] access_token:", token ? "present" : "missing");

  if (!token && !isPublicRoute(path)) {
    console.warn("[MIDDLEWARE] Redirecting unauthenticated user to /login");
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
