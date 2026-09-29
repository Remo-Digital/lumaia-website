'use client'
import { useLanguage } from '@/lib/LanguageContext'

export default function Problem() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden py-24 px-6" style={{ background: '#080614' }} aria-labelledby="problem-title">
      <div className="absolute inset-0 line-grid pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/4 right-0 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)', filter: 'blur(80px)', borderRadius: '50%' }} aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="text-accent text-base font-semibold tracking-[0.18em] uppercase mb-4">{t.problem.label}</p>
        <h2 id="problem-title" className="font-serif text-4xl md:text-5xl text-white leading-[1.15] mb-6 max-w-3xl">
          {t.problem.title} <em className="gradient-text not-italic italic">{t.problem.title_em}</em>
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mb-10 leading-relaxed">{t.problem.intro}</p>

        <ul className="space-y-4 mb-10 max-w-2xl" role="list">
          {t.problem.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-white/70 text-base leading-relaxed">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent/60 mt-2.5" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <p className="text-white/80 text-lg font-medium mb-8">{t.problem.conclusion}</p>

        <blockquote
          className="relative rounded-2xl p-8 md:p-10 max-w-2xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(123,232,159,0.07) 0%, rgba(14,156,176,0.07) 100%)', border: '1px solid rgba(123,232,159,0.2)' }}
        >
          <div className="absolute top-0 left-0 w-40 h-40 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(123,232,159,0.12) 0%, transparent 70%)', filter: 'blur(30px)' }} aria-hidden="true" />
          <span className="font-serif text-6xl gradient-text leading-none block mb-4" aria-hidden="true">&ldquo;</span>
          <p className="relative text-white text-xl md:text-2xl font-serif italic leading-relaxed">{t.problem.quote}</p>
        </blockquote>
      </div>
    </section>
  )
}
