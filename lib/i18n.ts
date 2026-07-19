export const locales = ['de', 'en'] as const
export type SiteLocale = (typeof locales)[number]
export const defaultLocale: SiteLocale = 'de'

const BASE = 'https://lumaia.studio'

export function localizedHref(href: string, locale: SiteLocale): string {
  return `/${locale}${href === '/' ? '' : href}`
}

export function getHreflangUrls(path: string) {
  // path should NOT contain locale prefix (e.g. '/contact', '/')
  const dePath = `${BASE}/de${path === '/' ? '' : path}`
  const enPath = `${BASE}/en${path === '/' ? '' : path}`

  return {
    'de-CH': dePath,
    'de-DE': dePath,
    'de-AT': dePath,
    'en-CH': enPath,
    'en-US': enPath,
    'x-default': dePath,
  }
}
