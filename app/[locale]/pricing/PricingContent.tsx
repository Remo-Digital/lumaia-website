'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/LanguageContext'
import { localizedHref } from '@/lib/i18n'

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function PricingContent() {
  const { t, locale } = useLanguage()
  const pp = t.pricingPage
  const [compareOpen, setCompareOpen] = useState(false)

  return (
    <>
      <Nav />
      <main
        id="main-content"
        className="relative min-h-screen pt-28 pb-24 px-6"
        style={{ background: 'linear-gradient(135deg, #03020a 0%, #0d0822 45%, #04021a 100%)' }}
      >
        <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto">

          {/* Header */}
          <header className="text-center mb-16 animate-fade-up-1">
            <span className="glass-accent text-accent text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full">
              {pp.label}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl mt-6 mb-4">
              {pp.title} <em className="gradient-text not-italic">{pp.title_em}</em>
            </h1>
            <p className="text-white/60 text-sm mt-3">{pp.trialBadge}</p>
          </header>

          {/* Plan Cards – top 3 */}
          <section
            className="animate-fade-up-2 mb-5"
            aria-label={locale === 'de' ? 'Preispläne' : 'Pricing plans'}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
              {pp.plans.slice(0, 3).map((plan) => (
                <div
                  key={plan.id}
                  className={`relative flex flex-col rounded-2xl p-7 overflow-hidden transition-all duration-200 ${
                    plan.highlight
                      ? 'glass-strong ring-1 ring-accent/30'
                      : 'glass'
                  }`}
                >
                  {plan.highlight && (
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: 'radial-gradient(ellipse at top right, rgba(123,232,159,0.08) 0%, transparent 60%)' }}
                      aria-hidden="true"
                    />
                  )}

                  <div className="relative flex flex-col gap-5 flex-1">
                    {/* Badge row */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className="text-xs font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full"
                        style={
                          plan.highlight
                            ? { background: 'rgba(123,232,159,0.15)', color: '#7be89f' }
                            : { background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.6)' }
                        }
                      >
                        {plan.label}
                      </span>
                      {'badge' in plan && plan.badge && (
                        <span className="text-[10px] font-bold tracking-wider uppercase text-ink px-2 py-0.5 rounded-full"
                          style={{ background: 'linear-gradient(135deg, #7be89f 0%, #0e9cb0 100%)' }}>
                          {(plan as { badge: string }).badge}
                        </span>
                      )}
                    </div>

                    <p className="text-white/40 text-xs -mt-2">{plan.target}</p>

                    <div>
                      <div className="font-serif text-3xl leading-tight text-white">{plan.price}</div>
                      {plan.priceSub && (
                        <div className="text-white/40 text-xs mt-1">{plan.priceSub}</div>
                      )}
                      {'priceSub2' in plan && plan.priceSub2 && (
                        <div className="text-white/30 text-xs mt-0.5">{(plan as { priceSub2: string }).priceSub2}</div>
                      )}
                    </div>

                    <p className="text-white/55 text-sm leading-relaxed">{plan.desc}</p>

                    <ul className="flex flex-col gap-2.5 text-white/70 text-sm flex-1" role="list">
                      {plan.features.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckIcon />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={localizedHref(plan.ctaHref, locale)}
                      className={`mt-auto inline-flex items-center justify-center gap-2 text-sm font-semibold px-5 py-3 rounded-full transition-all duration-200 ${
                        plan.highlight
                          ? 'text-ink hover:opacity-90 hover:-translate-y-0.5'
                          : 'glass border border-white/10 text-white/80 hover:text-white'
                      }`}
                      style={
                        plan.highlight
                          ? { background: 'linear-gradient(135deg, #7be89f 0%, #0e9cb0 100%)', boxShadow: '0 8px 24px rgba(79,193,168,0.2)' }
                          : undefined
                      }
                    >
                      {plan.cta}
                      {!plan.highlight && <span aria-hidden="true">&rarr;</span>}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Enterprise – full-width horizontal card */}
            {(() => {
              const plan = pp.plans[3]
              return (
                <div className="relative glass rounded-2xl p-7 overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at right center, rgba(14,156,176,0.06) 0%, transparent 60%)' }} aria-hidden="true" />
                  <div className="relative flex flex-col md:flex-row md:items-center gap-8">

                    {/* Left: label + price + desc */}
                    <div className="md:w-64 flex-shrink-0 flex flex-col gap-3">
                      <span
                        className="self-start text-xs font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.6)' }}
                      >
                        {plan.label}
                      </span>
                      <p className="text-white/40 text-xs">{plan.target}</p>
                      <div className="font-serif text-3xl gradient-text leading-tight">{plan.price}</div>
                      <p className="text-white/55 text-sm leading-relaxed">{plan.desc}</p>
                    </div>

                    {/* Center: features in 2 columns */}
                    <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 text-white/70 text-sm" role="list">
                      {plan.features.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckIcon />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Right: CTA */}
                    <div className="md:flex-shrink-0">
                      <a
                        href={localizedHref(plan.ctaHref, locale)}
                        className="inline-flex items-center justify-center gap-3 text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 text-ink whitespace-nowrap"
                        style={{ background: 'linear-gradient(135deg, #7be89f 0%, #0e9cb0 100%)', boxShadow: '0 8px 24px rgba(79,193,168,0.2)' }}
                      >
                        {plan.cta} <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              )
            })()}
          </section>

          {/* Compare toggle button */}
          <div className="flex justify-center mb-8 animate-fade-up-2">
            <button
              onClick={() => setCompareOpen(!compareOpen)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent/70 hover:text-accent transition-colors px-5 py-2.5 glass rounded-full border border-white/10"
              aria-expanded={compareOpen}
            >
              {compareOpen ? pp.compareBtnClose : pp.compareBtn}
              <svg
                width="12" height="8" viewBox="0 0 12 8" fill="none"
                className={`transition-transform duration-200 ${compareOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Comparison Table */}
          {compareOpen && (
            <section className="mb-16 animate-fade-up-1" aria-label={pp.compareTable.title}>
              <div className="glass-strong rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm" role="table">
                    <thead>
                      <tr className="border-b border-white/10">
                        {pp.compareTable.headers.map((h, i) => (
                          <th
                            key={i}
                            scope="col"
                            className={`px-5 py-4 font-semibold whitespace-nowrap ${
                              i === 0
                                ? 'text-white/50 w-48'
                                : i === 2
                                ? 'text-accent/80'
                                : 'text-white/70'
                            }`}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {pp.compareTable.rows.map((row, i) => (
                        <tr
                          key={i}
                          className={i < pp.compareTable.rows.length - 1 ? 'border-b border-white/5' : ''}
                        >
                          <td className="px-5 py-3.5 text-white/55 font-medium">{row.label}</td>
                          {row.cols.map((cell, j) => (
                            <td
                              key={j}
                              className={`px-5 py-3.5 whitespace-nowrap ${
                                j === 1 ? 'text-accent/80 font-medium' : 'text-white/65'
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          )}

          {/* LumAIa Credits Section */}
          <section className="mb-16 animate-fade-up-3" aria-labelledby="credits-heading">
            <div className="text-center mb-10">
              <span className="glass-accent text-accent text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full">
                {pp.credits.label}
              </span>
              <h2 id="credits-heading" className="font-serif text-3xl md:text-4xl mt-5 mb-4">
                {pp.credits.title}
              </h2>
              <p className="text-white/60 text-sm leading-relaxed max-w-2xl mx-auto">
                {pp.credits.intro}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {pp.credits.assets.map((asset) => (
                <div key={asset.name} className="glass rounded-2xl p-6 flex flex-col gap-3">
                  <div className="text-white/80 font-semibold text-sm">{asset.name}</div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-3xl gradient-text">{asset.credits}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/40">
                    <span>{locale === 'de' ? 'Traditionell*' : 'Traditional*'}</span>
                    <span className="line-through">{asset.traditional}</span>
                  </div>
                  <div className="text-[10px] font-bold tracking-wider uppercase text-accent/80 mt-auto">
                    {locale === 'de' ? 'mind. 90% günstiger' : 'at least 90% cheaper'}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-white/30 text-xs mt-5 text-center">{pp.credits.disclaimer}</p>
          </section>

          {/* FAQ Teaser */}
          <section className="glass rounded-2xl p-8 animate-fade-up-3 text-center" aria-label={locale === 'de' ? 'Kontakt' : 'Contact'}>
            <p className="text-white/70 text-sm mb-5">{pp.faqTeaserText}</p>
            <a
              href={localizedHref('/contact', locale)}
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 text-ink"
              style={{ background: 'linear-gradient(135deg, #7be89f 0%, #0e9cb0 100%)', boxShadow: '0 8px 24px rgba(79,193,168,0.2)' }}
            >
              {pp.faqTeaserContact} &rarr;
            </a>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
