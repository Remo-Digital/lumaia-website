'use client'
import { useLanguage } from '@/lib/LanguageContext'

export default function ProcessSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden py-24 px-6" style={{ background: '#050411' }}>
      <div className="absolute inset-0 line-grid pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-80 h-80 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,232,159,0.07) 0%, transparent 70%)', filter: 'blur(80px)', borderRadius: '50%' }} />

      <div className="relative z-10 max-w-3xl mx-auto">
        <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase mb-4">{t.process.label}</p>
        <h2 className="font-serif text-4xl md:text-5xl text-white leading-[1.15] mb-14">
          {t.process.title}<br />{t.process.title_2} <em className="gradient-text not-italic italic">{t.process.title_em}</em>
        </h2>

        <div className="space-y-3">
          {t.process.steps.map((s, i) => (
            <div key={s.num} className="glass glow-hover rounded-2xl p-6 flex gap-6 items-start transition-all duration-300">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-serif gradient-text font-bold"
                style={{ background: 'rgba(123,232,159,0.08)', border: '1px solid rgba(123,232,159,0.2)' }}>
                {i + 1}
              </div>
              <div>
                <h3 className="text-white font-medium mb-1.5">{s.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
