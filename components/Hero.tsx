'use client'
import { useLanguage } from '@/lib/LanguageContext'
import type { Locale } from '@/lib/translations'
import MetricsBar from './MetricsBar'

function localizedHref(href: string, locale: Locale) {
  if (locale === 'en') return `/en${href}`
  return href
}

export default function Hero() {
  const { t, locale } = useLanguage()

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
      style={{ background: 'linear-gradient(135deg, #03020a 0%, #0d0822 45%, #04021a 100%)' }}
      aria-labelledby="hero-heading"
    >
      {/* Background layers */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 line-grid pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none animate-float"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.13) 0%, transparent 65%)', filter: 'blur(80px)', borderRadius: '50%', transform: 'translate(30%, -20%)' }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,232,159,0.12) 0%, transparent 65%)', filter: 'blur(80px)', borderRadius: '50%', transform: 'translate(-20%, 20%)' }} aria-hidden="true" />
      <div className="absolute top-16 right-16 w-64 h-64 pointer-events-none animate-spin-slow opacity-10"
        style={{ border: '1px solid rgba(123,232,159,0.4)', borderRadius: '50%' }} aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        {/* Label */}
        <div className="animate-fade-up-1 inline-flex items-center gap-2 glass-accent text-accent text-xs font-semibold tracking-[0.18em] uppercase px-4 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" aria-hidden="true" />
          {t.hero.label}
        </div>

        {/* H1 */}
        <h1 id="hero-heading" className="animate-fade-up-2 font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-6 max-w-4xl">
          {t.hero.h1}<em className="gradient-text not-italic italic">{t.hero.h1_em}</em>
          <br />{t.hero.h1_2}
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up-3 text-lg text-white/50 max-w-xl mb-10 leading-relaxed">
          {t.hero.sub}
        </p>

        {/* CTA group */}
        <div className="animate-fade-up-4 flex flex-col sm:flex-row items-start gap-4 mb-4">
          <a
            href={localizedHref('/contact', locale)}
            className="text-ink font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #7be89f 0%, #0e9cb0 100%)', boxShadow: '0 8px 32px rgba(79,193,168,0.25)' }}
          >
            {t.hero.cta_primary}
          </a>
          <a
            href={localizedHref('/plattform', locale)}
            className="glass gradient-text px-8 py-4 rounded-full text-base font-medium transition-all duration-200 hover:opacity-80 hover:-translate-y-0.5"
          >
            {t.hero.cta_secondary}
          </a>
        </div>

        {/* Microcopy */}
        <p className="animate-fade-up-4 text-white/50 text-base mb-16 tracking-wide">
          {t.hero.microcopy}
        </p>

        {/* Stats row */}
        <div className="animate-fade-up-4">
          <MetricsBar />
        </div>
      </div>
    </section>
  )
}
