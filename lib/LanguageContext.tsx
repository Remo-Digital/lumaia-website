'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { translations, type Locale } from './translations'

interface LanguageContextType {
  locale: Locale
  t: typeof translations['en']
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'en',
  t: translations.en,
  toggle: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en')

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase()
    if (browserLang.startsWith('de')) {
      setLocale('de')
    } else {
      setLocale('en')
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const toggle = () => setLocale(prev => prev === 'en' ? 'de' : 'en')

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
