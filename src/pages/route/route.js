import { NextResponse } from 'next/server';
import { getDBConnection } from '../api/db'; // update the path if needed
import { serialize } from 'cookie';

export async function POST(req) {
    const body = await req.json();
    const { username, password } = body;

    try {
        const db = await getDBConnection();

        const [rows] = await db.execute(
            'SELECT * FROM users WHERE userid = ? AND password = ?',
            [username, password]
        );

        if (rows.length === 1) {
            const sessionToken = Math.random().toString(36).substring(2);

            const response = NextResponse.json({ success: true });
            response.headers.set(
                'Set-Cookie',
                serialize('session_token', sessionToken, {
                    httpOnly: true,
                    path: '/',
                    maxAge: 60 * 60,
                })
            );

            return response;
        }

        return NextResponse.json({ success: false }, { status: 401 });
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
