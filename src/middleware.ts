import { TOKEN } from "@/_common/constants/tokens";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get(TOKEN);

    // Allow access to the login page, static files, and API routes
    if (
        request.nextUrl.pathname.startsWith('/login') ||
        request.nextUrl.pathname.startsWith('/_next/static') 
    ) {
        return NextResponse.next();
    }

    if (!token?.value) {
        return redirect(request, '/login');
    }

    return NextResponse.next();
}

export const matchers = [];

const redirect = (request: NextRequest, url: string): NextResponse => {
    return NextResponse.redirect(new URL(url, request.url));
};
