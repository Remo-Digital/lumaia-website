'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import { useLanguage } from '@/lib/LanguageContext'
import { localizedHref } from '@/lib/i18n'

export default function ProductAssetStudioContent() {
  const { t, locale } = useLanguage()
  const pas = t.pas

  return (
    <>
      <Nav />
      <main id="main-content" className="pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden py-24 px-6" style={{ background: 'linear-gradient(135deg, #03020a 0%, #0d0822 45%, #04021a 100%)' }}>
          <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none animate-float"
            style={{ background: 'radial-gradient(circle, rgba(123,232,159,0.12) 0%, transparent 65%)', filter: 'blur(80px)', borderRadius: '50%', transform: 'translate(30%, -20%)' }} aria-hidden="true" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 glass-accent text-accent text-xs font-semibold tracking-[0.18em] uppercase px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" aria-hidden="true" />
              Product Asset Studio
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-8">{pas.h1}</h1>

            {/* Hero placeholder */}
            <div className="glass-strong rounded-2xl p-10 mb-8 min-h-[250px] relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-25" aria-hidden="true">
                <svg className="w-full h-full" viewBox="0 0 600 250" fill="none">
                  <rect x="40" y="50" width="100" height="150" rx="8" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
                  <text x="90" y="130" textAnchor="middle" fill="rgba(255,255,255,0.15)" fontSize="9">1 Bild</text>
                  <line x1="160" y1="125" x2="220" y2="125" stroke="rgba(123,232,159,0.3)" strokeWidth="2" markerEnd="url(#arrow)">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
                  </line>
                  <text x="190" y="115" textAnchor="middle" fill="rgba(123,232,159,0.4)" fontSize="9">PAS</text>
                  {[0,1,2,3].map(i => (
                    <g key={i}>
                      <rect x={240 + (i % 2) * 120} y={40 + Math.floor(i / 2) * 90} width="100" height="70" rx="6"
                        stroke="rgba(123,232,159,0.2)" strokeWidth="1" fill="rgba(123,232,159,0.03)">
                        <animate attributeName="opacity" values="0.5;0.9;0.5" dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" />
                      </rect>
                      <text x={290 + (i % 2) * 120} y={80 + Math.floor(i / 2) * 90} textAnchor="middle" fill="rgba(123,232,159,0.25)" fontSize="8">
                        {['Lifestyle', 'Hero', 'Detail', 'Rotation'][i]}
                      </text>
                    </g>
                  ))}
                  <defs>
                    <marker id="arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                      <path d="M0 0L8 3L0 6Z" fill="rgba(123,232,159,0.3)" />
                    </marker>
                  </defs>
                </svg>
              </div>
              <span className="relative text-white/30 text-xs">{pas.heroAlt}</span>
            </div>

            <p className="text-white/70 text-lg leading-relaxed mb-8">{pas.directOffer}</p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
              <a
                href={localizedHref('/signup', locale)}
                className="text-ink font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #7be89f 0%, #0e9cb0 100%)', boxShadow: '0 8px 32px rgba(79,193,168,0.25)' }}
              >
                {pas.cta}
              </a>
            </div>
            <p className="text-white/60 text-sm mb-8">{pas.ctaMicro}</p>

            <div className="glass rounded-2xl p-6">
              <p className="text-white/60 text-sm leading-relaxed">{pas.trustLayer}</p>
            </div>
          </div>
        </section>

        {/* Content sections */}
        <article className="relative py-4 px-6" style={{ background: '#080614' }}>
          <div className="absolute inset-0 line-grid pointer-events-none" aria-hidden="true" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-20 py-16">

            <section>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">{pas.sections.whyDifferent.title}</h2>
              <p className="text-white/70 text-base leading-relaxed mb-4">{pas.sections.whyDifferent.p1}</p>
              <p className="text-white/70 text-base leading-relaxed mb-6">{pas.sections.whyDifferent.p2}</p>
              <a href={localizedHref('/use-cases/agentic-commerce', locale)} className="text-accent text-sm hover:underline underline-offset-2">
                {pas.sections.whyDifferent.deepLink} &rarr;
              </a>
            </section>

            <section>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">{pas.sections.whatIs.title}</h2>
              <p className="text-white/70 text-base leading-relaxed">{pas.sections.whatIs.desc}</p>
            </section>

            <section>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">{pas.sections.assetTypes.title}</h2>
              <p className="text-white/70 text-base leading-relaxed mb-8">{pas.sections.assetTypes.intro}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pas.sections.assetTypes.types.map((type, i) => (
                  <article key={i} className="glass glow-hover rounded-2xl overflow-hidden transition-all duration-300">
                    <div className="h-32 bg-gradient-to-br from-accent/5 to-purple/5 flex items-center justify-center">
                      <span className="text-white/30 text-xs">{type.title} Placeholder</span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-lg text-white mb-2">{type.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{type.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">{pas.sections.googleStandard.title}</h2>
              <p className="text-white/70 text-base leading-relaxed mb-4">{pas.sections.googleStandard.intro}</p>
              <div className="glass-accent rounded-xl p-5 mb-6">
                <p className="text-white/80 text-base leading-relaxed font-medium">{pas.sections.googleStandard.prio1}</p>
              </div>
              <div className="space-y-3">
                {pas.sections.googleStandard.otherGroups.map((g, i) => (
                  <div key={i} className="glass rounded-xl p-4">
                    <h3 className="text-white/70 text-sm font-semibold mb-1">{g.title}</h3>
                    <p className="text-white/60 text-sm">{g.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">{pas.sections.howItWorks.title}</h2>
              <ol className="space-y-4">
                {pas.sections.howItWorks.steps.map((step, i) => (
                  <li key={i} className="glass rounded-xl p-5 flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-semibold">{i + 1}</span>
                    <p className="text-white/70 text-base leading-relaxed pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">{pas.sections.example1.title}</h2>
              <p className="text-white/70 text-base leading-relaxed mb-4">{pas.sections.example1.before}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="glass rounded-xl p-8 flex items-center justify-center min-h-[150px]">
                  <span className="text-white/30 text-xs">{locale === 'de' ? 'Vorher: 1 Bild' : 'Before: 1 image'}</span>
                </div>
                <div className="glass-accent rounded-xl p-8 flex items-center justify-center min-h-[150px]">
                  <span className="text-accent/20 text-xs">{locale === 'de' ? 'Nachher: 6 Bilder' : 'After: 6 images'}</span>
                </div>
              </div>
              <p className="text-white/70 text-base leading-relaxed">{pas.sections.example1.after}</p>
            </section>

            <section>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">{pas.sections.example2.title}</h2>
              <p className="text-white/70 text-base leading-relaxed mb-4">{pas.sections.example2.cutout}</p>
              <p className="text-white/70 text-base leading-relaxed mb-4">{pas.sections.example2.upscaling}</p>
              <p className="text-white/60 text-sm italic">{pas.sections.example2.note}</p>
            </section>

            <section>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">{pas.sections.results.title}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {pas.sections.results.items.map((item, i) => (
                  <div key={i} className="glass rounded-2xl p-5 text-center">
                    <div className="font-serif text-3xl gradient-text mb-2">{item.value}</div>
                    <div className="text-white/70 text-xs leading-tight">{item.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-white/80 text-lg font-medium text-center">{pas.sections.results.conclusion}</p>
            </section>

            <section>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">{pas.sections.audience.title}</h2>
              <p className="text-white/70 text-base leading-relaxed mb-4">{pas.sections.audience.forWhom}</p>
              <p className="text-white/60 text-sm italic">{pas.sections.audience.notFor}</p>
            </section>
          </div>
        </article>

        <FAQ items={pas.faq} showSchemaMarkup={true} />

        <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #03020a 0%, #0d0822 45%, #04021a 100%)' }}>
          <div className="max-w-2xl mx-auto text-center">
            <a
              href={localizedHref('/signup', locale)}
              className="inline-block text-ink font-semibold px-10 py-5 rounded-full text-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #7be89f 0%, #0e9cb0 100%)', boxShadow: '0 8px 32px rgba(79,193,168,0.25)' }}
            >
              {pas.cta}
            </a>
            <p className="text-white/60 text-sm mt-4">{pas.ctaMicro}</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <a href={localizedHref('/use-cases/agentic-commerce', locale)} className="text-white/70 hover:text-accent transition-colors">Use Case: Agentic Commerce</a>
              <span className="text-white/30 hidden sm:inline" aria-hidden="true">&bull;</span>
              <a href={localizedHref('/pricing', locale)} className="text-white/70 hover:text-accent transition-colors">{locale === 'de' ? 'Preise' : 'Pricing'}</a>
              <span className="text-white/30 hidden sm:inline" aria-hidden="true">&bull;</span>
              <a href={localizedHref('/plattform', locale)} className="text-white/70 hover:text-accent transition-colors">{locale === 'de' ? 'Plattform-\u00dcbersicht' : 'Platform Overview'}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
