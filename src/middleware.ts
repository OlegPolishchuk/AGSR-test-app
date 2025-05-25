import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ROUTES } from '@/shared/constants/routes';
import { sessionToken } from '@/shared/constants/auth';

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get('session');
  const token = cookie?.value;
  const { pathname } = request.nextUrl;

  const isAuth = token === sessionToken;
  const isRootOrLogin = pathname === '/' || pathname === ROUTES.login;

  if (!isAuth && !isRootOrLogin) {
    // Неавторизован и хочет зайти на защищённую страницу — редиректим на /login
    return NextResponse.redirect(new URL(ROUTES.login, request.url));
  }

  if (isAuth && isRootOrLogin) {
    // Авторизован и находится на '/' или '/login' — редиректим на main
    return NextResponse.redirect(new URL(ROUTES.main, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/login', '/tasks-list', `/tasks-list/:path*`],
};
