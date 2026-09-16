export const locales = ['de-ch', 'en-ch'] as const
export type SiteLocale = (typeof locales)[number]
export const defaultLocale: SiteLocale = 'de-ch'

const BASE = 'https://lumaia.studio'

// Slug translation map: internal filesystem path → localized URL slug per locale
// Sorted by path length descending for correct prefix matching
const pathTranslations: Record<string, Record<SiteLocale, string>> = {
  '/legal/terms': { 'de-ch': '/rechtliches/agbs', 'en-ch': '/legal/terms' },
  '/contact':     { 'de-ch': '/kontakt',           'en-ch': '/contact' },
  '/privacy':     { 'de-ch': '/datenschutz',        'en-ch': '/privacy' },
  '/imprint':     { 'de-ch': '/impressum',           'en-ch': '/imprint' },
  '/pricing':     { 'de-ch': '/preise',              'en-ch': '/pricing' },
  '/plattform':   { 'de-ch': '/plattform',           'en-ch': '/platform' },
}

// Pre-sorted keys by length descending for longest-prefix matching
const sortedPathKeys = Object.keys(pathTranslations).sort((a, b) => b.length - a.length)

/**
 * Translate an internal filesystem path to a localized URL slug.
 * Supports prefix matching for sub-paths (e.g. /plattform/foo → /platform/foo for en-ch).
 */
export function translatePath(internalPath: string, locale: SiteLocale): string {
  for (const key of sortedPathKeys) {
    if (internalPath === key) {
      return pathTranslations[key][locale]
    }
    if (internalPath.startsWith(key + '/')) {
      const rest = internalPath.slice(key.length)
      return pathTranslations[key][locale] + rest
    }
  }
  return internalPath
}

/**
 * Reverse-translate a localized URL slug back to the internal filesystem path.
 * Supports prefix matching for sub-paths.
 */
export function reverseTranslatePath(localizedPath: string, locale: SiteLocale): string {
  for (const key of sortedPathKeys) {
    const translated = pathTranslations[key][locale]
    if (localizedPath === translated) {
      return key
    }
    if (localizedPath.startsWith(translated + '/')) {
      const rest = localizedPath.slice(translated.length)
      return key + rest
    }
  }
  return localizedPath
}

/**
 * For language switcher: convert a path from one locale's slugs to another's.
 * Reverse-translates from source locale, then forward-translates to target locale.
 */
export function switchLocalePath(path: string, fromLocale: SiteLocale, toLocale: SiteLocale): string {
  const internal = reverseTranslatePath(path, fromLocale)
  return translatePath(internal, toLocale)
}

export function localizedHref(href: string, locale: SiteLocale): string {
  const translated = translatePath(href, locale)
  return `/${locale}${translated === '/' ? '' : translated}`
}

export function getHreflangUrls(internalPath: string) {
  const deSlug = translatePath(internalPath, 'de-ch')
  const enSlug = translatePath(internalPath, 'en-ch')
  const dePath = `${BASE}/de-ch${deSlug === '/' ? '' : deSlug}`
  const enPath = `${BASE}/en-ch${enSlug === '/' ? '' : enSlug}`

  return {
    'de-CH': dePath,
    'en-CH': enPath,
    'x-default': dePath,
  }
}
