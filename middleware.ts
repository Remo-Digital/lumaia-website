import { NextRequest, NextResponse } from 'next/server'
import { reverseTranslatePath, translatePath, type SiteLocale } from '@/lib/i18n'

const locales = ['de-ch', 'en-ch'] as const
const defaultLocale = 'de-ch'

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
  const matchedLocale = locales.find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  )

  if (matchedLocale) {
    const locale = matchedLocale as SiteLocale
    // Extract path after locale prefix
    const pathAfterLocale = pathname === `/${locale}` ? '/' : pathname.slice(`/${locale}`.length)

    // Check if this is a localized slug that needs rewriting to filesystem path
    const internalPath = reverseTranslatePath(pathAfterLocale, locale)
    if (internalPath !== pathAfterLocale) {
      // Rewrite to the filesystem path (URL stays the same for the user)
      const url = request.nextUrl.clone()
      url.pathname = `/${locale}${internalPath}`
      return NextResponse.rewrite(url)
    }

    // Check if this is a non-canonical slug that should redirect to the localized version
    // e.g. /de-ch/contact → /de-ch/kontakt
    const canonicalSlug = translatePath(pathAfterLocale, locale)
    if (canonicalSlug !== pathAfterLocale) {
      const url = request.nextUrl.clone()
      url.pathname = `/${locale}${canonicalSlug}`
      return NextResponse.redirect(url, 301)
    }

    return NextResponse.next()
  }

  // Redirect bare paths to /de-ch/...
  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.redirect(url, 301)
}

export const config = {
  matcher: ['/((?!_next|api).*)'],
}
