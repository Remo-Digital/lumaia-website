'use client'
import { useLanguage } from '@/lib/LanguageContext'

export default function Comparison() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden py-24 px-6" style={{ background: '#080614' }} aria-labelledby="comparison-title">
      <div className="absolute inset-0 line-grid pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-accent text-base font-semibold tracking-[0.18em] uppercase mb-4">{t.comparison.label}</p>
        <h2 id="comparison-title" className="font-serif text-4xl md:text-5xl text-white leading-[1.15] mb-12">
          {t.comparison.title}
        </h2>

        <div className="glass-strong rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left" role="table">
              <thead>
                <tr className="border-b border-white/10">
                  {t.comparison.headers.map((h, i) => (
                    <th key={i} className={`px-6 py-4 text-sm font-semibold ${i === 0 ? 'text-white/60' : i === 2 ? 'text-accent/80' : 'text-white/70'}`} scope="col">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.comparison.rows.map((row, i) => (
                  <tr key={i} className={i < t.comparison.rows.length - 1 ? 'border-b border-white/5' : ''}>
                    <td className="px-6 py-4 text-white/70 text-sm font-medium">{row.label}</td>
                    <td className="px-6 py-4 text-white/60 text-sm">
                      <span className="text-red-400/70 mr-2" aria-hidden="true">&#x2717;</span>
                      {row.agency}
                    </td>
                    <td className="px-6 py-4 text-accent/70 text-sm font-medium">
                      <span className="text-emerald-400 mr-2" aria-hidden="true">&#x2713;</span>
                      {row.lumaia}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
