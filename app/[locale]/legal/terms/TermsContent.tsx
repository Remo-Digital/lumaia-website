'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/LanguageContext'
import { localizedHref } from '@/lib/i18n'

export default function TermsContent() {
  const { t, locale } = useLanguage()
  const tp = t.termsPage

  return (
    <>
      <Nav />
      <main id="main-content" className="relative min-h-screen pt-28 pb-20 px-6"
        style={{ background: 'linear-gradient(135deg, #03020a 0%, #0d0822 45%, #04021a 100%)' }}>
        <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-2xl mx-auto">
          <header className="text-center mb-12 animate-fade-up-1">
            <span className="glass-accent text-accent text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full">
              {tp.label}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl mt-6 mb-4">
              {tp.title} <em className="gradient-text not-italic">{tp.title_em}</em>
            </h1>
          </header>

          <section className="glass rounded-2xl p-10 text-center animate-fade-up-2 flex flex-col items-center gap-6" aria-label={tp.label}>
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, rgba(123,232,159,0.10) 0%, rgba(14,156,176,0.10) 100%)', border: '1px solid rgba(123,232,159,0.12)' }}
              aria-hidden="true"
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <rect x="5" y="3" width="18" height="22" rx="2" stroke="#7be89f" strokeWidth="1.5" strokeOpacity="0.6" />
                <path d="M9 9h10M9 13h10M9 17h6" stroke="#7be89f" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>

            <p className="text-white/70 text-base leading-relaxed">{tp.comingSoon}</p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={localizedHref('/contact', locale)}
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-full transition-opacity hover:opacity-80"
                style={{ background: 'linear-gradient(135deg, rgba(123,232,159,0.15) 0%, rgba(14,156,176,0.15) 100%)', border: '1px solid rgba(123,232,159,0.2)', color: '#7be89f' }}
              >
                {tp.contactCta} &rarr;
              </a>
              <a
                href={localizedHref('/privacy', locale)}
                className="inline-flex items-center justify-center gap-2 glass border border-white/10 text-white/80 hover:text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
              >
                {tp.privacyCta}
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
