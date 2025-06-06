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

    const userCookieRaw = cookies["user"];
    const token = cookies["token"];
    const isLoggedIn = cookies["isLoggedInYN"];

    let userData = null;

    try {
        // Some cookies may be URI encoded; decode before parsing
        userData = userCookieRaw ? JSON.parse(decodeURIComponent(userCookieRaw)) : null;
    } catch (e) {
        // Invalid user cookie
        userData = null;
    }

    // For admin routes, check if logged-in user is an admin
    if (isAdminRoutes(path)) {
        const isAdmin = userData?.data.role === 'admin';
        console.log(userData)
        if (!isAdmin || !token || isLoggedIn !== 'true') {
            return NextResponse.redirect(new URL("/admin", req.nextUrl));
        }
        return NextResponse.next();
    }

    // For general routes, block if no user cookie and it's not public
    if (!userCookieRaw && !isPublicRoute(path)) {
        return NextResponse.redirect(new URL("/login", req.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
