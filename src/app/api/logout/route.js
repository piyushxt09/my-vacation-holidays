import { NextResponse } from 'next/server';

export async function GET(request) {
  const response = NextResponse.redirect(new URL('/login', request.url));

  // Delete the token cookie (same name as set in login)
  response.cookies.delete('token', { path: '/' });

  return response;
}
