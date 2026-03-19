'use client'
import { useLanguage } from '@/lib/LanguageContext'

export default function Problem() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden py-24 px-6" style={{ background: '#050411' }}>
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)', filter: 'blur(80px)', borderRadius: '50%' }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase mb-4">{t.problem.label}</p>
        <h2 className="font-serif text-4xl md:text-5xl text-white leading-[1.15] max-w-xl mb-4">
          {t.problem.title} <em className="gradient-text not-italic italic">{t.problem.title_em}</em>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12 items-start">
          <ul className="space-y-2">
            {t.problem.items.map((p) => (
              <li key={p.strong}
                className="glass glow-hover rounded-xl p-4 flex gap-4 items-start transition-all duration-300">
                <span className="text-xl mt-0.5 flex-shrink-0">{p.icon}</span>
                <div>
                  <strong className="text-white/80 font-medium text-sm">{p.strong}</strong>{' '}
                  <span className="text-white/40 text-sm">{p.text}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="glass-strong rounded-2xl p-8 relative overflow-hidden">
            {/* Accent corner */}
            <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
              style={{ background: 'radial-gradient(circle at top right, rgba(123,232,159,0.1) 0%, transparent 70%)' }} />
            <h3 className="font-serif text-2xl gradient-text mb-4">{t.problem.card_title}</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              {t.problem.card_p1}
            </p>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              {t.problem.card_p2}
            </p>
            <blockquote className="border-l-2 border-accent/40 pl-4 text-sm italic text-white/40">
              {t.problem.card_quote}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
