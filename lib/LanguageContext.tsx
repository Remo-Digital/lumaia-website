'use client'
import { createContext, useContext } from 'react'
import { translations, type Locale } from './translations'

interface LanguageContextType {
  locale: Locale
  t: typeof translations[Locale]
  toggle: () => void
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'de',
  t: translations.de,
  toggle: () => {},
  setLocale: () => {},
})

export function LanguageProvider({
  locale,
  children,
}: {
  locale: Locale
  children: React.ReactNode
}) {
  const toggle = () => {
    // In the new routing model, toggling navigates to the other locale URL.
    // Components handle this via the language switcher links instead.
  }

  const setLocale = () => {
    // Same as toggle – navigation-based, not state-based.
  }

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], toggle, setLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
