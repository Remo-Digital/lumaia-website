'use client'
import { useLanguage } from '@/lib/LanguageContext'
import type { Locale } from '@/lib/translations'

function localizedHref(href: string, locale: Locale) {
  if (locale === 'en') return `/en${href}`
  return href
}

export default function CTAFinal() {
  const { t, locale } = useLanguage()

  return (
    <section className="relative overflow-hidden py-28 px-6" style={{ background: 'linear-gradient(135deg, #03020a 0%, #0d0822 45%, #04021a 100%)' }} aria-labelledby="cta-final-title">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 line-grid pointer-events-none" aria-hidden="true" />

      {/* Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 65%)', filter: 'blur(80px)', borderRadius: '50%', transform: 'translate(30%, -30%)' }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,232,159,0.1) 0%, transparent 65%)', filter: 'blur(80px)', borderRadius: '50%', transform: 'translate(-20%, 20%)' }} aria-hidden="true" />

      {/* Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none animate-spin-slow opacity-[0.04]"
        style={{ border: '1px solid rgba(123,232,159,1)', borderRadius: '50%' }} aria-hidden="true" />

      <div className="relative z-10 max-w-lg mx-auto text-center">
        <span className="glass-accent text-accent text-base font-semibold tracking-[0.18em] uppercase px-4 py-2 rounded-full inline-block mb-6">{t.cta.label}</span>
        <h2 id="cta-final-title" className="font-serif text-4xl md:text-5xl text-white leading-[1.1] mb-4">
          {t.cta.title}
        </h2>
        <p className="text-white/50 text-lg mb-4 italic">
          {t.cta.title_em}
        </p>
        <p className="text-white/60 mb-10 leading-relaxed text-base">
          {t.cta.sub}
        </p>

        <a
          href={localizedHref('/contact', locale)}
          className="inline-block text-ink font-semibold px-10 py-5 rounded-full text-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
          style={{ background: 'linear-gradient(135deg, #7be89f 0%, #0e9cb0 100%)', boxShadow: '0 8px 32px rgba(79,193,168,0.25)' }}
        >
          {t.cta.ctaButton}
        </a>
      </div>
    </section>
  )
}
