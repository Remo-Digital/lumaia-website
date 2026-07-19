'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import { useLanguage } from '@/lib/LanguageContext'
import { localizedHref } from '@/lib/i18n'

export default function AgenticCommerceContent() {
  const { t, locale } = useLanguage()
  const ac = t.agenticCommerce

  return (
    <>
      <Nav />
      <main id="main-content" className="pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden py-24 px-6" style={{ background: 'linear-gradient(135deg, #03020a 0%, #0d0822 45%, #04021a 100%)' }}>
          <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none animate-float"
            style={{ background: 'radial-gradient(circle, rgba(14,156,176,0.12) 0%, transparent 65%)', filter: 'blur(80px)', borderRadius: '50%', transform: 'translate(30%, -20%)' }} aria-hidden="true" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-6xl text-white leading-[1.1] mb-8">{ac.h1}</h1>

            {/* Hero placeholder image */}
            <div className="glass-strong rounded-2xl p-12 mb-8 flex items-center justify-center min-h-[250px] relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" aria-hidden="true">
                <svg className="w-full h-full" viewBox="0 0 600 250" fill="none">
                  <circle cx="100" cy="125" r="40" stroke="rgba(123,232,159,0.3)" strokeWidth="1.5" fill="rgba(123,232,159,0.03)">
                    <animate attributeName="r" values="38;42;38" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <text x="100" y="130" textAnchor="middle" fill="rgba(123,232,159,0.4)" fontSize="12">AI Agent</text>
                  <line x1="145" y1="105" x2="250" y2="70" stroke="rgba(123,232,159,0.15)" strokeWidth="1" strokeDasharray="4 4">
                    <animate attributeName="strokeDashoffset" values="0;-8" dur="1s" repeatCount="indefinite" />
                  </line>
                  <line x1="145" y1="125" x2="250" y2="125" stroke="rgba(123,232,159,0.2)" strokeWidth="1" strokeDasharray="4 4">
                    <animate attributeName="strokeDashoffset" values="0;-8" dur="0.8s" repeatCount="indefinite" />
                  </line>
                  <line x1="145" y1="145" x2="250" y2="180" stroke="rgba(123,232,159,0.15)" strokeWidth="1" strokeDasharray="4 4">
                    <animate attributeName="strokeDashoffset" values="0;-8" dur="1.2s" repeatCount="indefinite" />
                  </line>
                  <rect x="250" y="50" width="120" height="40" rx="8" stroke="rgba(79,193,168,0.25)" strokeWidth="1" fill="rgba(79,193,168,0.03)" />
                  <text x="310" y="75" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="10">Shop A</text>
                  <rect x="250" y="105" width="120" height="40" rx="8" stroke="rgba(79,193,168,0.35)" strokeWidth="1.5" fill="rgba(79,193,168,0.05)" />
                  <text x="310" y="130" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="10">Shop B</text>
                  <rect x="250" y="160" width="120" height="40" rx="8" stroke="rgba(79,193,168,0.25)" strokeWidth="1" fill="rgba(79,193,168,0.03)" />
                  <text x="310" y="185" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="10">Shop C</text>
                  <line x1="380" y1="125" x2="460" y2="125" stroke="rgba(123,232,159,0.3)" strokeWidth="1.5">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
                  </line>
                  <circle cx="500" cy="125" r="30" stroke="rgba(123,232,159,0.4)" strokeWidth="1.5" fill="rgba(123,232,159,0.05)" />
                  <text x="500" y="122" textAnchor="middle" fill="rgba(123,232,159,0.5)" fontSize="10">Buy</text>
                  <text x="500" y="135" textAnchor="middle" fill="rgba(123,232,159,0.3)" fontSize="8">&#x2713;</text>
                </svg>
              </div>
              <span className="relative text-white/30 text-sm" aria-label={ac.heroAlt}>{ac.heroAlt}</span>
            </div>

            <div className="glass-accent rounded-2xl p-6 mb-12">
              <p className="text-white/80 text-base leading-relaxed">{ac.directAnswer}</p>
            </div>

            <nav className="glass rounded-2xl p-6 mb-16" aria-label={locale === 'de' ? 'Inhaltsverzeichnis' : 'Table of contents'}>
              <h2 className="text-white/70 text-sm font-semibold tracking-[0.15em] uppercase mb-4">{locale === 'de' ? 'Inhaltsverzeichnis' : 'Contents'}</h2>
              <ol className="space-y-2">
                {ac.toc.map((item, i) => (
                  <li key={i}>
                    <a href={`#section-${i + 1}`} className="text-white/70 text-sm hover:text-accent transition-colors">
                      {i + 1}. {item}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </section>

        {/* Content sections */}
        <article className="relative py-4 px-6" style={{ background: '#080614' }}>
          <div className="absolute inset-0 line-grid pointer-events-none" aria-hidden="true" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-20">

            <section id="section-1" className="scroll-mt-24">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">{ac.sections.howAgentsShop.title}</h2>
              <p className="text-white/70 text-base leading-relaxed mb-6">{ac.sections.howAgentsShop.intro}</p>
              <p className="text-white/70 text-base leading-relaxed mb-6">{ac.sections.howAgentsShop.protocolsIntro}</p>
              <div className="space-y-4 mb-8">
                {ac.sections.howAgentsShop.protocols.map(p => (
                  <div key={p.name} className="glass rounded-xl p-5">
                    <h3 className="text-accent font-semibold text-sm mb-1">{p.name} <span className="text-white/60 font-normal">({p.full})</span></h3>
                    <p className="text-white/70 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
              <div className="glass-strong rounded-2xl p-10 mb-8 flex items-center justify-center min-h-[180px] relative overflow-hidden">
                <div className="absolute inset-0 opacity-25" aria-hidden="true">
                  <svg className="w-full h-full" viewBox="0 0 500 180" fill="none">
                    {['ACP', 'UCP', 'MCP', 'AP2', 'A2A'].map((name, i) => (
                      <g key={name}>
                        <rect x={20 + i * 95} y="60" width="80" height="60" rx="8" stroke="rgba(123,232,159,0.25)" strokeWidth="1" fill="rgba(123,232,159,0.03)">
                          <animate attributeName="opacity" values="0.5;0.9;0.5" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
                        </rect>
                        <text x={60 + i * 95} y="95" textAnchor="middle" fill="rgba(123,232,159,0.4)" fontSize="11">{name}</text>
                        {i < 4 && (
                          <line x1={100 + i * 95} y1="90" x2={115 + i * 95} y2="90" stroke="rgba(123,232,159,0.15)" strokeWidth="1" strokeDasharray="3 3">
                            <animate attributeName="strokeDashoffset" values="0;-6" dur="1s" repeatCount="indefinite" />
                          </line>
                        )}
                      </g>
                    ))}
                  </svg>
                </div>
                <span className="relative text-white/30 text-xs">{locale === 'de' ? 'Protokoll-\u00dcbersicht' : 'Protocol Overview'}</span>
              </div>
              <p className="text-white/70 text-base leading-relaxed font-medium">{ac.sections.howAgentsShop.conclusion}</p>
            </section>

            <section id="section-2" className="scroll-mt-24">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">{ac.sections.whyNow.title}</h2>
              <div className="space-y-4 text-white/70 text-base leading-relaxed">
                <p>{ac.sections.whyNow.p1}</p>
                <p>{ac.sections.whyNow.p2}</p>
                <p>{ac.sections.whyNow.p3}</p>
                <p className="text-white/80 font-medium">{ac.sections.whyNow.p4}</p>
              </div>
            </section>

            <section id="section-3" className="scroll-mt-24">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">{ac.sections.selfCheck.title}</h2>
              <p className="text-white/70 text-base leading-relaxed mb-6">{ac.sections.selfCheck.intro}</p>
              <ul className="space-y-3 mb-6" role="list">
                {ac.sections.selfCheck.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70 text-base leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full glass-accent flex items-center justify-center text-accent text-xs mt-0.5" aria-hidden="true">?</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-white/70 text-base leading-relaxed italic">{ac.sections.selfCheck.conclusion}</p>
            </section>

            <section id="section-4" className="scroll-mt-24">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">{ac.sections.examples.title}</h2>
              <div className="space-y-4 text-white/70 text-base leading-relaxed">
                <p>{ac.sections.examples.p1}</p>
                <p>{ac.sections.examples.p2}</p>
                <p className="text-white/80 font-medium italic">{ac.sections.examples.p3}</p>
              </div>
            </section>

            <section id="section-5" className="scroll-mt-24">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">{ac.sections.prerequisites.title}</h2>
              <p className="text-white/70 text-base leading-relaxed mb-6">{ac.sections.prerequisites.intro}</p>
              <ol className="space-y-4 mb-8" role="list">
                {ac.sections.prerequisites.items.map((item, i) => (
                  <li key={i} className="glass rounded-xl p-5 flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-semibold">{i + 1}</span>
                    <div>
                      <h3 className="text-white/90 font-semibold text-base mb-1">{item.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="text-white/70 text-base leading-relaxed">{ac.sections.prerequisites.conclusion}</p>
            </section>

            <section id="section-6" className="scroll-mt-24">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">{ac.sections.comparisonTable.title}</h2>
              <div className="glass-strong rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left" role="table">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="px-6 py-4 text-sm font-semibold text-white/60" scope="col">{locale === 'de' ? 'Merkmal' : 'Attribute'}</th>
                        <th className="px-6 py-4 text-sm font-semibold text-white/70" scope="col">{locale === 'de' ? 'Klassisch' : 'Traditional'}</th>
                        <th className="px-6 py-4 text-sm font-semibold text-accent/80" scope="col">Agent-ready</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ac.sections.comparisonTable.rows.map((row, i) => (
                        <tr key={i} className={i < ac.sections.comparisonTable.rows.length - 1 ? 'border-b border-white/5' : ''}>
                          <td className="px-6 py-4 text-white/70 text-sm font-medium">{row.label}</td>
                          <td className="px-6 py-4 text-white/60 text-sm">{row.traditional}</td>
                          <td className="px-6 py-4 text-accent/70 text-sm font-medium">{row.agentReady}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="section-7" className="scroll-mt-24">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">{ac.sections.solution.title}</h2>
              <div className="space-y-4 text-white/70 text-base leading-relaxed mb-8">
                <p>{ac.sections.solution.p1}</p>
                <p>{ac.sections.solution.p2}</p>
                <p className="text-white/80 font-medium italic">{ac.sections.solution.p3}</p>
              </div>
              <a
                href={localizedHref('/plattform/product-asset-studio', locale)}
                className="inline-block text-ink font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #7be89f 0%, #0e9cb0 100%)', boxShadow: '0 8px 32px rgba(79,193,168,0.25)' }}
              >
                {ac.sections.solution.cta} &rarr;
              </a>
            </section>

            <section className="glass-strong rounded-2xl p-8 mb-8">
              <h2 className="font-serif text-xl text-white mb-4">{locale === 'de' ? 'Fazit' : 'Conclusion'}</h2>
              <p className="text-white/70 text-base leading-relaxed">{ac.conclusion}</p>
            </section>

            <section className="glass-accent rounded-2xl p-6 mb-8">
              <h2 className="text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-3">TL;DR</h2>
              <ul className="space-y-2">
                {ac.tldr.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/70 text-sm leading-relaxed">
                    <span className="text-accent mt-0.5" aria-hidden="true">&bull;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="glass rounded-2xl p-6 flex items-start gap-5">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-purple/20 flex items-center justify-center text-white/50 text-lg font-semibold" aria-hidden="true">
                RG
              </div>
              <div>
                <h3 className="text-white/90 font-semibold text-base">{ac.author.name}</h3>
                <p className="text-accent/70 text-sm mb-2">{ac.author.role}</p>
                <p className="text-white/60 text-sm leading-relaxed">{ac.author.bio}</p>
              </div>
            </section>
          </div>
        </article>

        <FAQ items={ac.faq} showSchemaMarkup={true} />

        <section className="py-20 px-6" style={{ background: '#070512' }}>
          <div className="max-w-2xl mx-auto text-center">
            <a
              href={localizedHref('/plattform/product-asset-studio', locale)}
              className="inline-block text-ink font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #7be89f 0%, #0e9cb0 100%)', boxShadow: '0 8px 32px rgba(79,193,168,0.25)' }}
            >
              {ac.sections.solution.cta} &rarr;
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
