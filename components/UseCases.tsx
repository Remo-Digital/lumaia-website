'use client'
import { useLanguage } from '@/lib/LanguageContext'

const colors = [
  'rgba(123,232,159,0.1)',
  'rgba(124,58,237,0.1)',
  'rgba(37,99,235,0.1)',
  'rgba(123,232,159,0.1)',
]

export default function UseCases() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden py-24 px-6" style={{ background: '#070512' }}>
      <div className="absolute inset-0 diagonal-lines pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 70%)', filter: 'blur(80px)', borderRadius: '50%' }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase mb-4">{t.usecases.label}</p>
        <h2 className="font-serif text-4xl md:text-5xl text-white leading-[1.15] max-w-xl mb-14">
          {t.usecases.title} <em className="gradient-text not-italic italic">{t.usecases.title_em}</em>
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {t.usecases.items.map((c, idx) => (
            <div key={c.title}
              className="glass glow-hover rounded-2xl p-7 relative overflow-hidden transition-all duration-300 group">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at top right, ${colors[idx]} 0%, transparent 60%)` }} />
              <h3 className="text-white font-medium mb-3 relative z-10">{c.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-5 relative z-10">{c.desc}</p>
              <span className="relative z-10 glass-accent text-accent text-xs font-semibold px-3 py-1.5 rounded-full inline-block">
                {c.result}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
