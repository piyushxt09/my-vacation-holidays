import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function GET() {
    const response = NextResponse.json({ message: 'Logged out' });

    response.headers.set(
        'Set-Cookie',
        serialize('session_token', '', {
            httpOnly: true,
            path: '/',
            maxAge: 0, // delete cookie
        })
    );

    return response;
}
