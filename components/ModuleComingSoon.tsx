'use client'
import { useLanguage } from '@/lib/LanguageContext'
import { getModuleBySlug, phases } from '@/lib/modules'
import type { Locale } from '@/lib/translations'
import Nav from './Nav'
import TopBanner from './TopBanner'
import Footer from './Footer'

function localizedHref(href: string, locale: Locale) {
  if (locale === 'en') return `/en${href}`
  return href
}

export default function ModuleComingSoon({ slug }: { slug: string }) {
  const { t, locale } = useLanguage()
  const mod = getModuleBySlug(slug)

  if (!mod) return null

  const phase = phases[mod.phase]

  return (
    <>
      <TopBanner />
      <Nav />
      <main id="main-content" className="pt-24">
        <section className="relative min-h-[70vh] flex items-center overflow-hidden py-24 px-6" style={{ background: 'linear-gradient(135deg, #03020a 0%, #0d0822 45%, #04021a 100%)' }}>
          <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
            style={{ background: `radial-gradient(circle, ${phase.color}15 0%, transparent 65%)`, filter: 'blur(80px)', borderRadius: '50%', transform: 'translate(30%, -20%)' }} aria-hidden="true" />

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <a href={localizedHref('/plattform', locale)} className="text-accent text-sm hover:underline underline-offset-2">
                &larr; {t.moduleComingSoon.backToOverview}
              </a>
            </nav>

            {/* Phase badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-xs font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full" style={{ color: phase.color, background: `${phase.color}12`, border: `1px solid ${phase.color}25` }}>
                {phase[locale]}
              </span>
              <span className="glass-accent text-accent text-xs font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full">
                {t.moduleComingSoon.status}
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl text-white leading-[1.1] mb-6">
              {mod.name[locale]}
            </h1>
            <p className="text-white/55 text-lg leading-relaxed mb-8 max-w-xl">
              {mod.description[locale]}
            </p>
            <p className="text-white/40 text-base mb-12">
              {t.moduleComingSoon.intro}
            </p>

            {/* Animated placeholder visual */}
            <div className="glass-strong rounded-2xl p-12 mb-16 flex items-center justify-center min-h-[200px] relative overflow-hidden">
              <div className="absolute inset-0 opacity-30" aria-hidden="true">
                <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
                  <rect x="20" y="20" width="100" height="60" rx="8" stroke="rgba(123,232,159,0.2)" strokeWidth="1" strokeDasharray="4 4">
                    <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
                  </rect>
                  <rect x="140" y="30" width="120" height="40" rx="8" stroke="rgba(79,193,168,0.2)" strokeWidth="1" strokeDasharray="4 4">
                    <animate attributeName="opacity" values="0.4;0.7;0.4" dur="4s" repeatCount="indefinite" />
                  </rect>
                  <rect x="280" y="20" width="100" height="60" rx="8" stroke="rgba(14,156,176,0.2)" strokeWidth="1" strokeDasharray="4 4">
                    <animate attributeName="opacity" values="0.3;0.5;0.3" dur="3.5s" repeatCount="indefinite" />
                  </rect>
                  <line x1="120" y1="50" x2="140" y2="50" stroke="rgba(123,232,159,0.15)" strokeWidth="1">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="260" y1="50" x2="280" y2="50" stroke="rgba(123,232,159,0.15)" strokeWidth="1">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" />
                  </line>
                  <rect x="80" y="110" width="240" height="50" rx="8" stroke="rgba(124,58,237,0.15)" strokeWidth="1" strokeDasharray="4 4">
                    <animate attributeName="opacity" values="0.2;0.5;0.2" dur="5s" repeatCount="indefinite" />
                  </rect>
                </svg>
              </div>
              <span className="relative text-white/20 text-sm font-medium tracking-wider uppercase">{t.moduleComingSoon.status}</span>
            </div>

            {/* CTA */}
            <div className="glass-strong rounded-2xl p-8 text-center">
              <h2 className="font-serif text-2xl text-white mb-3">{t.moduleComingSoon.ctaTitle}</h2>
              <p className="text-white/50 text-base mb-6">{t.moduleComingSoon.ctaSub}</p>
              <a
                href={localizedHref('/contact', locale)}
                className="inline-block text-ink font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #7be89f 0%, #0e9cb0 100%)', boxShadow: '0 8px 32px rgba(79,193,168,0.25)' }}
              >
                {t.moduleComingSoon.cta}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
