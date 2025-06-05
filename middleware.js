import { NextResponse } from "next/server";
import {
    PUBLIC_ROUTES,
    VIEW_ONLY_ROUTES,
    ROLE,
    ADMIN_ROUTES,
} from "./middleware.constant";

const isPublicRoute = (path) =>
    PUBLIC_ROUTES.some((route) => path === route || path.startsWith(`${route}/`));

const isViewOnlyRoute = (path) =>
    VIEW_ONLY_ROUTES.some(
        (route) => path === route || path.startsWith(`${route}/`)
    );

const isAdminRoutes = (path) =>
    path.startsWith('/admin');

export default async function middleware(req) {
    const path = req.nextUrl.pathname;

    // Allow access to admin login page
    if (path === '/admin') {
        return NextResponse.next();
    }

    const cookieHeader = req.headers.get("cookie") || "";
    const cookies = Object.fromEntries(
        cookieHeader.split("; ").map((cookie) => cookie.split("="))
    );

    const adminId = cookies["adminId"];
    const token = cookies["token"];
    const isLoggedIn = cookies["isLoggedInYN"];

    // For admin routes, check admin authentication
    if (isAdminRoutes(path)) {
        if (!adminId || !token || isLoggedIn !== 'true') {
            return NextResponse.redirect(new URL("/admin", req.nextUrl));
        }
        return NextResponse.next();
    }

    // For non-admin routes, check user authentication
    const userCookie = cookies["user"];
    if (!userCookie && !isPublicRoute(path)) {
        return NextResponse.redirect(new URL("/login", req.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
