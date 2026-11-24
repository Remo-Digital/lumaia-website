'use client'
import { useEffect, useId, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/lib/LanguageContext'
import {
  hreflangOf,
  isGerman,
  languageNames,
  localeInfo,
  locales,
  switchLocalePath,
  type Language,
  type SiteLocale,
} from '@/lib/i18n'

const languages: Language[] = ['de', 'en']
const localePrefix = new RegExp(`^/(${locales.join('|')})(?=/|$)`)

/** Short label for the trigger, e.g. "DE · CH", "EN · UK" */
const shortLabel = (locale: SiteLocale) => locale.toUpperCase().replace('-', ' · ')

type Props = {
  /** Overrides the target per locale, e.g. for blog posts with per-locale slugs */
  localeHrefs?: Partial<Record<SiteLocale, string>>
  /** `up` opens above the trigger (footer), `down` below (nav), `inline` lists all options (mobile menu) */
  variant?: 'down' | 'up' | 'inline'
  onNavigate?: () => void
}

export default function LocaleSwitcher({ localeHrefs, variant = 'down', onNavigate }: Props) {
  const { locale } = useLanguage()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const listId = useId()

  const pathWithoutLocale = pathname.replace(localePrefix, '') || '/'
  const hrefFor = (target: SiteLocale) =>
    localeHrefs?.[target] ?? `/${target}${pathWithoutLocale === '/' ? '' : switchLocalePath(pathWithoutLocale, locale, target)}`

  useEffect(() => {
    if (!open) return
    const onPointer = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const label = isGerman(locale) ? 'Land und Sprache wählen' : 'Choose country and language'

  const options = (
    <ul id={listId} className="flex flex-col gap-3">
      {languages.map((language) => (
        <li key={language}>
          <span className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-white/40 mb-1">
            {languageNames[language]}
          </span>
          <ul className="flex flex-col">
            {locales
              .filter((l) => localeInfo[l].language === language)
              .map((l) => {
                const current = l === locale
                return (
                  <li key={l}>
                    <a
                      href={hrefFor(l)}
                      hrefLang={hreflangOf(l)}
                      lang={hreflangOf(l)}
                      aria-current={current ? 'true' : undefined}
                      onClick={() => {
                        setOpen(false)
                        onNavigate?.()
                      }}
                      className={`flex items-center justify-between gap-6 rounded-lg px-2 py-1.5 text-sm transition-colors ${
                        current ? 'text-accent' : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {localeInfo[l].countryName}
                      {current && <span aria-hidden="true">✓</span>}
                    </a>
                  </li>
                )
              })}
          </ul>
        </li>
      ))}
    </ul>
  )

  if (variant === 'inline') {
    return (
      <nav aria-label={label} className="text-left">
        {options}
      </nav>
    )
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`${label}: ${localeInfo[locale].countryName}, ${languageNames[localeInfo[locale].language]}`}
        className="flex items-center gap-1.5 px-2 py-1 rounded text-sm font-semibold tracking-[0.1em] uppercase text-white/60 hover:text-white transition-colors"
      >
        {shortLabel(locale)}
        <svg aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" className={`transition-transform ${open ? 'rotate-180' : ''}`}>
          <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
      {open && (
        <nav
          aria-label={label}
          className={`absolute right-0 z-50 min-w-[220px] rounded-xl p-4 shadow-2xl ${variant === 'up' ? 'bottom-full mb-2' : 'top-full mt-2'}`}
          style={{ background: 'rgba(13,8,34,0.97)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(16px)' }}
        >
          {options}
        </nav>
      )}
    </div>
  )
}
