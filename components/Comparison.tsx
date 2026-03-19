'use client'
import { useLanguage } from '@/lib/LanguageContext'

export default function Comparison() {
  const { t } = useLanguage()
  const rows = t.comparison.rows
  const headers = t.comparison.headers

  return (
    <section className="relative overflow-hidden py-24 px-6" style={{ background: '#050411' }}>
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,232,159,0.06) 0%, transparent 70%)', filter: 'blur(80px)', borderRadius: '50%', transform: 'translateY(-50%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase mb-4">{t.comparison.label}</p>
        <h2 className="font-serif text-4xl md:text-5xl text-white leading-[1.15] mb-14">
          {t.comparison.title}
        </h2>

        <div className="glass rounded-2xl overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <th className="text-left p-5 text-xs font-medium tracking-[0.12em] uppercase text-white/30">{headers[0]}</th>
                <th className="text-left p-5 text-xs font-medium tracking-[0.12em] uppercase text-white/30">{headers[1]}</th>
                <th className="text-left p-5 text-xs font-medium tracking-[0.12em] uppercase gradient-text">{headers[2]}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.label}
                  style={{ borderBottom: i < rows.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}
                  className="group hover:bg-white/[0.02] transition-colors duration-200">
                  <td className="p-5 text-white/60 text-sm">{r.label}</td>
                  <td className="p-5 text-sm">
                    <span className="text-red-400/70 mr-2">✗</span>
                    <span className="text-white/35">{r.agency}</span>
                  </td>
                  <td className="p-5 text-sm">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span className="text-white/70 font-medium">{r.lumaia}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
