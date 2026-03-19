'use client'
import { useLanguage } from '@/lib/LanguageContext'

export default function Offer() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden py-24 px-6" style={{ background: '#070512' }}>
      <div className="absolute inset-0 diagonal-lines pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,232,159,0.08) 0%, transparent 70%)', filter: 'blur(80px)', borderRadius: '50%' }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase mb-4">{t.offer.label}</p>
        <h2 className="font-serif text-4xl md:text-5xl text-white leading-[1.15] max-w-lg mb-3">
          {t.offer.title}<br />{t.offer.title_2} <em className="gradient-text not-italic italic">{t.offer.title_em}</em>
        </h2>
        <p className="text-white/40 max-w-md mb-14 leading-relaxed text-sm">
          {t.offer.sub}
        </p>

        <div className="grid md:grid-cols-4 gap-4">
          {t.offer.steps.map((s, i) => (
            <div key={s.num}
              className="glass glow-hover rounded-2xl p-6 relative overflow-hidden transition-all duration-300 group">
              <div className="absolute top-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(123,232,159,0.5), transparent)' }} />
              <div className="font-serif text-5xl mb-4" style={{ color: `rgba(123,232,159,${0.08 + i * 0.05})` }}>{s.num}</div>
              <div className="text-white font-medium mb-2">{s.title}</div>
              <p className="text-white/40 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
