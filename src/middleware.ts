import { NextResponse, type NextRequest } from 'next/server';
import { showTypeA } from './flag';

export const config = { matcher: ['/dashboard', '/dashboard/type-a'] };

export async function middleware(request: NextRequest) {
  const typeA = await showTypeA();

  const url = typeA ? '/dashboard/type-a' : '/dashboard';

  if (request.url.endsWith('type-a')) {
    request.nextUrl.pathname = '/dashboard';
    return NextResponse.redirect(request.nextUrl);
  }

  const nextUrl = new URL(url, request.url);
  return NextResponse.rewrite(nextUrl);
}
