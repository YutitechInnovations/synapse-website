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
    ADMIN_ROUTES.some((route) => path === route);

export default async function middleware(req) {
    const path = req.nextUrl.pathname;

    const cookieHeader = req.headers.get("cookie") || "";
    const cookies = Object.fromEntries(
        cookieHeader.split("; ").map((cookie) => cookie.split("="))
    );

    const userCookie = cookies["user"];
    const adminCookie = cookies["adminId"];

    let userData = null;
    let adminId = null;

    if (userCookie) {
        try {
            userData = JSON.parse(decodeURIComponent(userCookie));
        } catch (error) {
            console.error("Failed to parse user cookie:", error.message);
        }
    }

    if (adminCookie) {
        try {
            adminId = (decodeURIComponent(adminCookie));
        } catch (error) {
            console.error("Failed to parse admin cookie:", error.message);
        }
    }

    const isAuthenticated = !!userData;

    // ✅ Redirect unauthenticated users trying to access private routes
    if (!isAuthenticated && !isPublicRoute(path) && !isAdminRoutes(path)) {
        return NextResponse.redirect(new URL("/login", req.nextUrl));
    }

    // ✅ Redirect unauthenticated admin to admin login
    if (!adminId && isAdminRoutes(path)) {
        return NextResponse.redirect(new URL("/admin", req.nextUrl));
    }

    // ✅ Redirect users who are both logged in as admin & user
    // to admin dashboard only when they're trying to access non-admin pages
    if (isAuthenticated && adminId && path === '/admin') {
        return NextResponse.redirect(new URL("/admin/dashboard", req.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
