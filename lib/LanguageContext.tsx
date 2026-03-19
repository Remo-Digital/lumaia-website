'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { translations, type Locale } from './translations'

interface LanguageContextType {
  locale: Locale
  t: typeof translations[Locale]
  toggle: () => void
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'en',
  t: translations.en,
  toggle: () => {},
  setLocale: () => {},
})

function localeFromPath(pathname: string): Locale {
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en'
  return 'de'
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [locale, setLocale] = useState<Locale>('en')

  useEffect(() => {
    setLocale(localeFromPath(pathname))
  }, [pathname])

  useEffect(() => {
    document.documentElement.lang = locale
    localStorage.setItem('locale', locale)
  }, [locale])

  const toggle = () => setLocale(prev => prev === 'en' ? 'de' : 'en')

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], toggle, setLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
