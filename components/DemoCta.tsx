'use client'
import { useLanguage } from '@/lib/LanguageContext'
import { localizedHref } from '@/lib/i18n'

export default function DemoCta() {
  const { t, locale } = useLanguage()

  return (
    <section className="relative overflow-hidden py-20 px-6" style={{ background: 'linear-gradient(135deg, #03020a 0%, #0d0822 45%, #04021a 100%)' }}>
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,232,159,0.08) 0%, transparent 70%)', filter: 'blur(60px)', borderRadius: '50%' }} />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-white leading-[1.15] mb-4">
          {t.demoCta.title}
        </h2>
        <p className="text-white/70 text-lg mb-8 leading-relaxed">{t.demoCta.sub}</p>
        <a
          href={localizedHref('/contact', locale)}
          className="inline-block text-ink font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
          style={{ background: 'linear-gradient(135deg, #7be89f 0%, #0e9cb0 100%)', boxShadow: '0 8px 32px rgba(79,193,168,0.25)' }}
        >
          {t.demoCta.cta}
        </a>
      </div>
    </section>
  )
}
