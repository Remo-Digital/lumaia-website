import { NextRequest, NextResponse } from 'next/server'

const locales = ['de', 'en']
const defaultLocale = 'de'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip static files, Next.js internals, and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // files with extensions (favicon.ico, images, etc.)
  ) {
    return NextResponse.next()
  }

  // Check if pathname already has a locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // Redirect bare paths to /de/...
  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.redirect(url, 301)
}

export const config = {
  matcher: ['/((?!_next|api).*)'],
}
