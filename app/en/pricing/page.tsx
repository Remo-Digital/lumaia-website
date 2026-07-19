'use client'
import TopBanner from '@/components/TopBanner'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/LanguageContext'

export default function PricingPage() {
  const { t } = useLanguage()
  const pp = t.pricingPage
  const pt = t.pricingTeaser

  return (
    <>
      <TopBanner />
      <Nav />
      <main id="main-content" className="relative min-h-screen pt-28 pb-20 px-6"
        style={{ background: 'linear-gradient(135deg, #03020a 0%, #0d0822 45%, #04021a 100%)' }}>
        <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-5xl mx-auto">
          {/* Header */}
          <header className="text-center mb-16 animate-fade-up-1">
            <span className="glass-accent text-accent text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full">
              {pp.label}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl mt-6 mb-4">
              {pp.title} <em className="gradient-text not-italic">{pp.title_em}</em>
            </h1>
          </header>

          {/* Pricing comparison table */}
          <section className="animate-fade-up-2 mb-12" aria-labelledby="pricing-table-heading">
            <h2 id="pricing-table-heading" className="sr-only">{pt.title}</h2>
            <div className="glass-strong rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left" role="table">
                  <thead>
                    <tr className="border-b border-white/10">
                      {pt.headers.map((h, i) => (
                        <th
                          key={i}
                          scope="col"
                          className={`px-6 py-5 text-sm font-semibold ${i === 0 ? 'text-white/40 w-1/4' : i === 2 ? 'text-accent/80' : 'text-white/70'}`}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {pt.rows.map((row, i) => (
                      <tr key={i} className={i < pt.rows.length - 1 ? 'border-b border-white/5' : ''}>
                        <td className="px-6 py-5 text-white/50 text-sm font-medium">{row.label}</td>
                        <td className="px-6 py-5 text-white/60 text-sm">{row.col1}</td>
                        <td className="px-6 py-5 text-white/70 text-sm font-medium">{row.col2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Plan cards */}
          <section className="grid md:grid-cols-2 gap-6 animate-fade-up-2 mb-16" aria-label="Pricing plans">
            {/* Self-Serve card */}
            <div className="glass rounded-2xl p-8 flex flex-col gap-6">
              <div>
                <span className="glass-accent text-accent text-xs font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full self-start">
                  Self-Serve
                </span>
                <h3 className="font-serif text-3xl mt-4 mb-2">
                  From CHF <em className="gradient-text not-italic">29</em><span className="text-white/40 text-lg font-sans not-italic">/month</span>
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  Individual modules like Product Asset Studio. Start instantly, cancel monthly. No sales call required.
                </p>
              </div>
              <ul className="flex flex-col gap-3 text-white/55 text-sm" role="list">
                {[
                  'Instant access – no onboarding call required',
                  'Cancel monthly',
                  'No credit card to get started',
                  'Product Asset Studio from CHF 29/month',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/en/signup"
                className="mt-auto inline-flex items-center justify-center gap-2 glass border border-white/10 text-white/70 hover:text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Get started
              </a>
            </div>

            {/* Pilot Partner card */}
            <div className="glass-strong rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at top right, rgba(123,232,159,0.07) 0%, transparent 60%)' }} aria-hidden="true" />
              <div className="relative">
                <span className="text-xs font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full" style={{ background: 'rgba(123,232,159,0.15)', color: '#7be89f' }}>
                  Pilot Partner
                </span>
                <h3 className="font-serif text-3xl mt-4 mb-2">
                  <em className="gradient-text not-italic">12-month</em> fixed price
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  All modules, guaranteed price, direct influence on LumAIa's development. For teams that want the full system.
                </p>
              </div>
              <ul className="relative flex flex-col gap-3 text-white/55 text-sm" role="list">
                {[
                  'Access to all 19 modules',
                  '12-month guaranteed fixed price',
                  'Personal onboarding and setup',
                  'Direct influence on product development',
                  'Limited number of spots available',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/en/contact"
                className="relative mt-auto inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-full transition-opacity hover:opacity-80"
                style={{ background: 'linear-gradient(135deg, rgba(123,232,159,0.18) 0%, rgba(14,156,176,0.18) 100%)', border: '1px solid rgba(123,232,159,0.25)', color: '#7be89f' }}
              >
                Book a demo &rarr;
              </a>
            </div>
          </section>

          {/* FAQ teaser */}
          <section className="glass rounded-2xl p-8 animate-fade-up-3 text-center" aria-label="Questions">
            <p className="text-white/50 text-sm mb-4">Still have questions? Find all details in the FAQ on the homepage or book a demo directly.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/en"
                className="text-sm font-semibold text-accent/70 hover:text-accent transition-colors underline underline-offset-2"
              >
                Go to homepage &rarr;
              </a>
              <a
                href="/en/contact"
                className="text-sm font-semibold text-accent/70 hover:text-accent transition-colors underline underline-offset-2"
              >
                Get in touch &rarr;
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
