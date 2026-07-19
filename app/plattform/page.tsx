'use client'
import TopBanner from '@/components/TopBanner'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/LanguageContext'
import { modules, phases } from '@/lib/modules'
import type { Locale } from '@/lib/translations'

function localizedHref(href: string, locale: Locale) {
  if (locale === 'en') return `/en${href}`
  return href
}

const phaseOrder = ['plan', 'build', 'publish', 'report-learn'] as const

export default function PlattformPage() {
  const { t, locale } = useLanguage()

  return (
    <>
      <TopBanner />
      <Nav />
      <main id="main-content" className="pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden py-24 px-6" style={{ background: 'linear-gradient(135deg, #03020a 0%, #0d0822 45%, #04021a 100%)' }} aria-labelledby="platform-title">
          <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(123,232,159,0.1) 0%, transparent 65%)', filter: 'blur(80px)', borderRadius: '50%', transform: 'translate(30%, -20%)' }} aria-hidden="true" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <p className="text-accent text-base font-semibold tracking-[0.18em] uppercase mb-4">{t.platformPage.label}</p>
            <h1 id="platform-title" className="font-serif text-5xl md:text-7xl text-white leading-[1.05] mb-6">
              {t.platformPage.title} <em className="gradient-text not-italic italic">{t.platformPage.title_em}</em>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl leading-relaxed">{t.platformPage.sub}</p>
          </div>
        </section>

        {/* Phases & Modules */}
        {phaseOrder.map(phaseKey => {
          const phase = phases[phaseKey]
          const phaseModules = modules.filter(m => m.phase === phaseKey)

          return (
            <section key={phaseKey} className="relative overflow-hidden py-16 px-6" style={{ background: '#080614' }}>
              <div className="absolute inset-0 line-grid pointer-events-none" aria-hidden="true" />
              <div className="relative z-10 max-w-5xl mx-auto">
                <h2 className="text-lg font-semibold tracking-[0.15em] uppercase mb-8" style={{ color: phase.color }}>
                  {phase[locale]}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {phaseModules.map(mod => (
                    <a
                      key={mod.slug}
                      href={localizedHref(mod.url, locale)}
                      className="glass glow-hover rounded-2xl p-6 transition-all duration-300 group block"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold tracking-wider uppercase text-white/40">{mod.tag[locale]}</span>
                        <span className={`text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded ${
                          mod.status === 'live' ? 'text-accent bg-accent/10' : 'text-white/30 bg-white/5'
                        }`}>
                          {mod.status === 'live' ? t.platformPage.live : t.platformPage.comingSoon}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg text-white group-hover:text-accent transition-colors mb-2">{mod.name[locale]}</h3>
                      <p className="text-white/45 text-sm leading-relaxed">{mod.description[locale]}</p>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          )
        })}

        {/* CTA */}
        <section className="py-20 px-6" style={{ background: '#070512' }}>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-white mb-4">{t.demoCta.title}</h2>
            <p className="text-white/50 text-base mb-8">{t.demoCta.sub}</p>
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
