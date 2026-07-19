'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/LanguageContext'
import { localizedHref } from '@/lib/i18n'

export default function UseCasesContent() {
  const { t, locale } = useLanguage()

  return (
    <>
      <Nav />
      <main id="main-content" className="pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden py-24 px-6" style={{ background: 'linear-gradient(135deg, #03020a 0%, #0d0822 45%, #04021a 100%)' }} aria-labelledby="usecases-title">
          <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" aria-hidden="true" />
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(14,156,176,0.08) 0%, transparent 65%)', filter: 'blur(80px)', borderRadius: '50%' }} aria-hidden="true" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <p className="text-accent text-base font-semibold tracking-[0.18em] uppercase mb-4">{t.useCasesPage.label}</p>
            <h1 id="usecases-title" className="font-serif text-5xl md:text-7xl text-white leading-[1.05] mb-6">
              {t.useCasesPage.title} <em className="gradient-text not-italic italic">{t.useCasesPage.title_em}</em>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed">{t.useCasesPage.sub}</p>
          </div>
        </section>

        {/* Use Case Cards */}
        <section className="relative overflow-hidden py-16 px-6" style={{ background: '#080614' }}>
          <div className="absolute inset-0 line-grid pointer-events-none" aria-hidden="true" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.useCasesPage.cases.map((uc, i) => {
                const href = uc.href === '#' ? '#' : localizedHref(uc.href, locale)
                const isFeatured = i === 0
                return (
                  <a
                    key={i}
                    href={href}
                    className={`glass glow-hover rounded-2xl p-8 transition-all duration-300 group block ${isFeatured ? 'md:col-span-2' : ''}`}
                    style={isFeatured ? { border: '1px solid rgba(123,232,159,0.15)' } : undefined}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full ${
                        uc.badge === 'Featured' ? 'text-accent bg-accent/10 border border-accent/20' : 'text-white/50 bg-white/5'
                      }`}>
                        {uc.badge}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl text-white group-hover:text-accent transition-colors mb-3">{uc.title}</h2>
                    <p className="text-white/70 text-base leading-relaxed">{uc.desc}</p>
                    {href !== '#' && (
                      <span className="inline-block mt-4 text-accent text-sm font-medium">
                        {locale === 'de' ? 'Mehr erfahren' : 'Learn more'} &rarr;
                      </span>
                    )}
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6" style={{ background: '#070512' }}>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-white mb-4">{t.demoCta.title}</h2>
            <p className="text-white/70 text-base mb-8">{t.demoCta.sub}</p>
            <a
              href={localizedHref('/contact', locale)}
              className="inline-block text-ink font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #7be89f 0%, #0e9cb0 100%)', boxShadow: '0 8px 32px rgba(79,193,168,0.25)' }}
            >
              {t.demoCta.cta}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
