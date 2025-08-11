import { NextResponse } from 'next/server';

export function middleware(request) {
    const token = request.cookies.get('session_token')?.value;
    const isAdminPath = request.nextUrl.pathname.startsWith('/admin');

    if (isAdminPath && !token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
};
