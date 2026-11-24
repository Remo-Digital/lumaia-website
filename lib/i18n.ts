// Locales are language + market. Each locale has a base language whose content it uses;
// market-specific overrides live in lib/translations.ts.
export const locales = ['de-ch', 'de-de', 'de-at', 'en-ch', 'en-us', 'en-uk'] as const
export type SiteLocale = (typeof locales)[number]
export type Language = 'de' | 'en'
export const defaultLocale: SiteLocale = 'de-ch'

const BASE = 'https://lumaia.studio'

type LocaleInfo = {
  language: Language
  /** Locale whose content this locale inherits (the original-language version) */
  baseLocale: 'de-ch' | 'en-ch'
  /** BCP 47 code for hreflang, <html lang> and JSON-LD. UK is en-GB, not en-UK. */
  hreflang: string
  /** ISO 3166 country code, as sent by Vercel in `x-vercel-ip-country` */
  country: string
  /** Country name in the locale's language, for the switcher */
  countryName: string
}

export const localeInfo: Record<SiteLocale, LocaleInfo> = {
  'de-ch': { language: 'de', baseLocale: 'de-ch', hreflang: 'de-CH', country: 'CH', countryName: 'Schweiz' },
  'de-de': { language: 'de', baseLocale: 'de-ch', hreflang: 'de-DE', country: 'DE', countryName: 'Deutschland' },
  'de-at': { language: 'de', baseLocale: 'de-ch', hreflang: 'de-AT', country: 'AT', countryName: 'Österreich' },
  'en-ch': { language: 'en', baseLocale: 'en-ch', hreflang: 'en-CH', country: 'CH', countryName: 'Switzerland' },
  'en-us': { language: 'en', baseLocale: 'en-ch', hreflang: 'en-US', country: 'US', countryName: 'United States' },
  'en-uk': { language: 'en', baseLocale: 'en-ch', hreflang: 'en-GB', country: 'GB', countryName: 'United Kingdom' },
}

export const languageNames: Record<Language, string> = { de: 'Deutsch', en: 'English' }

export const isLocale = (value: string): value is SiteLocale => (locales as readonly string[]).includes(value)
export const languageOf = (locale: SiteLocale): Language => localeInfo[locale].language
export const isGerman = (locale: SiteLocale) => localeInfo[locale].language === 'de'
export const hreflangOf = (locale: SiteLocale) => localeInfo[locale].hreflang
/** Key for content stored per base language ({ 'de-ch': …, 'en-ch': … }) */
export const baseLocaleOf = (locale: SiteLocale) => localeInfo[locale].baseLocale

// Slug translation map per language: internal filesystem path → localized URL slug.
const pathTranslations: Record<string, Record<Language, string>> = {
  '/legal/terms': { de: '/rechtliches/agbs', en: '/legal/terms' },
  '/contact':     { de: '/kontakt',          en: '/contact' },
  '/privacy':     { de: '/datenschutz',      en: '/privacy' },
  '/imprint':     { de: '/impressum',        en: '/imprint' },
  '/pricing':     { de: '/preise',           en: '/pricing' },
  '/plattform':   { de: '/plattform',        en: '/platform' },
}

// Pre-sorted keys by length descending for longest-prefix matching
const sortedPathKeys = Object.keys(pathTranslations).sort((a, b) => b.length - a.length)

/**
 * Translate an internal filesystem path to a localized URL slug.
 * Supports prefix matching for sub-paths (e.g. /plattform/foo → /platform/foo in English).
 */
export function translatePath(internalPath: string, locale: SiteLocale): string {
  const language = languageOf(locale)
  for (const key of sortedPathKeys) {
    if (internalPath === key) return pathTranslations[key][language]
    if (internalPath.startsWith(key + '/')) return pathTranslations[key][language] + internalPath.slice(key.length)
  }
  return internalPath
}

/**
 * Reverse-translate a localized URL slug back to the internal filesystem path.
 * Supports prefix matching for sub-paths.
 */
export function reverseTranslatePath(localizedPath: string, locale: SiteLocale): string {
  const language = languageOf(locale)
  for (const key of sortedPathKeys) {
    const translated = pathTranslations[key][language]
    if (localizedPath === translated) return key
    if (localizedPath.startsWith(translated + '/')) return key + localizedPath.slice(translated.length)
  }
  return localizedPath
}

/**
 * For language switcher: convert a path from one locale's slugs to another's.
 * Reverse-translates from source locale, then forward-translates to target locale.
 */
export function switchLocalePath(path: string, fromLocale: SiteLocale, toLocale: SiteLocale): string {
  return translatePath(reverseTranslatePath(path, fromLocale), toLocale)
}

export function localizedHref(href: string, locale: SiteLocale): string {
  const translated = translatePath(href, locale)
  return `/${locale}${translated === '/' ? '' : translated}`
}

/** Absolute URL of an internal path in one locale */
export function localizedUrl(internalPath: string, locale: SiteLocale): string {
  return `${BASE}${localizedHref(internalPath, locale)}`
}

/**
 * Absolute URLs of a page in every locale, keyed by hreflang code (de-CH, de-DE, …, en-GB)
 * plus `x-default` (the default locale).
 */
export function getHreflangUrls(internalPath: string): Record<string, string> {
  const urls: Record<string, string> = {}
  for (const locale of locales) urls[hreflangOf(locale)] = localizedUrl(internalPath, locale)
  urls['x-default'] = urls[hreflangOf(defaultLocale)]
  return urls
}

/** Canonical URL of an internal path in one locale */
export const canonicalUrl = (internalPath: string, locale: SiteLocale) => localizedUrl(internalPath, locale)

/**
 * Best locale for a visitor without a locale in the URL: country (Vercel geo header) first,
 * then the browser's Accept-Language, then the default.
 */
export function detectLocale(country: string | null, acceptLanguage: string | null): SiteLocale {
  const preferred = (acceptLanguage ?? '')
    .split(',')
    .map((part) => part.split(';')[0].trim().toLowerCase())
    .filter(Boolean)
  const preferredLanguage = preferred.map((tag) => tag.slice(0, 2)).find((l): l is Language => l === 'de' || l === 'en')

  const countryCode = country?.toUpperCase()
  if (countryCode) {
    const inCountry = locales.filter((l) => localeInfo[l].country === countryCode)
    if (inCountry.length) return inCountry.find((l) => localeInfo[l].language === preferredLanguage) ?? inCountry[0]
  }

  for (const tag of preferred) {
    const exact = locales.find((l) => localeInfo[l].hreflang.toLowerCase() === tag)
    if (exact) return exact
  }
  if (preferredLanguage === 'en') return countryCode === 'GB' ? 'en-uk' : 'en-us'
  return defaultLocale
}
