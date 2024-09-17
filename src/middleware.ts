import { TOKEN } from "@/_common/constants/tokens";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const _token = request.cookies.get(TOKEN);
    return NextResponse.next();
}

export const matchers = [];

const _redirect = (request: NextRequest, url: string): NextResponse => {
    return NextResponse.redirect(new URL(url, request.url));
};
