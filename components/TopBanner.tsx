'use client'
import { useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

export default function TopBanner() {
  const { t, locale } = useLanguage()
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div
      role="banner"
      className="relative z-[60] flex items-center justify-center gap-3 px-4 py-2 text-sm text-center"
      style={{ background: 'linear-gradient(90deg, rgba(123,232,159,0.15) 0%, rgba(14,156,176,0.15) 100%)', borderBottom: '1px solid rgba(123,232,159,0.12)' }}
    >
      <span className="text-white/80">{t.nav.banner}</span>
      <a
        href="/agentic-commerce"
        className="font-semibold text-accent hover:underline underline-offset-2"
      >
        {t.nav.bannerCta} &rarr;
      </a>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors p-1"
        aria-label={locale === 'de' ? 'Banner schliessen' : 'Dismiss banner'}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  )
}
