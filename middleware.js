import { NextResponse } from "next/server";

let locales = ['fa', 'en']

function getLocale(request) {
  const acceptLanguage = request.headers.get('accept-language');
  if (!acceptLanguage) return 'fa';

  const preferredLang = acceptLanguage.split(',')[0];

  const supportedLocales = ['fa', 'en'];
  const matchedLocale = supportedLocales.find(locale =>
    preferredLang.startsWith(locale)
  )

  return matchedLocale || 'fa';
}

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}