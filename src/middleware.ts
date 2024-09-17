import { NextResponse } from "next/server";

export function middleware() {
    return NextResponse.next();
}

export const matchers = [];

// const _redirect = (request: NextRequest, url: string): NextResponse => {
//     return NextResponse.redirect(new URL(url, request.url));
// };
