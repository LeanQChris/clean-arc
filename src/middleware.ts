import { TOKEN } from "@/_common/constants/tokens";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get(TOKEN);
    
    // If the token is missing and the request is not for the login page, redirect to login
    if (!token?.value && request.nextUrl.pathname !== '/login') {
        return redirect(request, '/login');
    }

    return NextResponse.next();
}

// Use matchers to only run middleware on certain routes (e.g., protect '/dashboard', '/profile')
export const config = {
  matcher: [
    '/dashboard/:path*',  // Protected routes
    '/profile/:path*',    // Protected routes
    '/settings/:path*',   // Other protected routes
    // Add more protected routes here
  ],
};

// Utility function for redirection
const redirect = (request: NextRequest, url: string): NextResponse => {
    return NextResponse.redirect(new URL(url, request.url));
};
