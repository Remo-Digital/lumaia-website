'use client'
import { useLanguage } from '@/lib/LanguageContext'
import { localizedHref } from '@/lib/i18n'

export default function PricingTeaser() {
  const { t, locale } = useLanguage()

  return (
    <section className="relative overflow-hidden py-24 px-6" style={{ background: '#080614' }} aria-labelledby="pricing-teaser-title">
      <div className="absolute inset-0 line-grid pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 id="pricing-teaser-title" className="font-serif text-4xl md:text-5xl text-white leading-[1.15] mb-12 text-center">
          {t.pricingTeaser.title}
        </h2>

        {/* Table */}
        <div className="glass-strong rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left" role="table">
              <thead>
                <tr className="border-b border-white/10">
                  {t.pricingTeaser.headers.map((h, i) => (
                    <th key={i} className={`px-6 py-4 text-sm font-semibold ${i === 0 ? 'text-white/60 w-1/4' : 'text-white/80'}`} scope="col">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.pricingTeaser.rows.map((row, i) => (
                  <tr key={i} className={i < t.pricingTeaser.rows.length - 1 ? 'border-b border-white/5' : ''}>
                    <td className="px-6 py-4 text-white/70 text-sm font-medium">{row.label}</td>
                    <td className="px-6 py-4 text-white/70 text-sm">{row.col1}</td>
                    <td className="px-6 py-4 text-white/70 text-sm">{row.col2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href={localizedHref('/pricing', locale)}
            className="text-accent font-semibold hover:underline underline-offset-2"
          >
            {t.pricingTeaser.link} &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}
