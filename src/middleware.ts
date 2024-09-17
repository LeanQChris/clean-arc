import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = new URL(request.url);
    const token = request.cookies.get('token') || request.headers.get('Authorization');

    if (pathname === "/" && token) {
        return NextResponse.redirect(new URL('/admin', request.url));
    }

    // Redirect authenticated users from /login to the home page
    if (pathname === '/login' && token) {
        return NextResponse.redirect(new URL('/admin', request.url));
    }

    // Redirect unauthenticated users from protected routes to /login
    if (pathname !== '/login' && !token) {
        // Preserve the original URL to redirect back after login
        const url = new URL('/login', request.url);
        return NextResponse.redirect(url);
    }

    // Allow the request to proceed
    return NextResponse.next();
}

// Define routes where the middleware should be applied
export const config = {
    matcher: ["/", '/login', '/admin/:path*'], // Adjust this pattern based on your routes
};