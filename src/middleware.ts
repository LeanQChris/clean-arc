import { TOKEN } from "@/_common/constants/tokens";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get(TOKEN);
    return NextResponse.next();
}

export const matchers = [];

const redirect = (request: NextRequest, url: string): NextResponse => {
    return NextResponse.redirect(new URL(url, request.url));
};
