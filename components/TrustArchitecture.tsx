'use client'
import { useLanguage } from '@/lib/LanguageContext'

const icons = [
  /* Integration Hub */
  <svg key="hub" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><circle cx="14" cy="14" r="12" stroke="rgba(123,232,159,0.5)" strokeWidth="1.5"/><circle cx="14" cy="14" r="4" fill="rgba(123,232,159,0.3)"/><path d="M14 2v8M14 18v8M2 14h8M18 14h8" stroke="rgba(123,232,159,0.3)" strokeWidth="1"/></svg>,
  /* Shield */
  <svg key="shield" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><path d="M14 3l9 4v7c0 5.5-3.8 10-9 12-5.2-2-9-6.5-9-12V7l9-4z" stroke="rgba(123,232,159,0.5)" strokeWidth="1.5" fill="rgba(123,232,159,0.05)"/><path d="M10 14l3 3 5-5" stroke="rgba(123,232,159,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  /* People */
  <svg key="people" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><circle cx="14" cy="10" r="4" stroke="rgba(123,232,159,0.5)" strokeWidth="1.5"/><path d="M6 24c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="rgba(123,232,159,0.5)" strokeWidth="1.5" strokeLinecap="round"/></svg>,
]

export default function TrustArchitecture() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden py-24 px-6" style={{ background: '#070512' }} aria-labelledby="trust-arch-title">
      <div className="absolute inset-0 diagonal-lines pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)', filter: 'blur(80px)', borderRadius: '50%' }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 id="trust-arch-title" className="font-serif text-4xl md:text-5xl text-white leading-[1.15] mb-4">
          {t.trustArch.title} <em className="gradient-text not-italic italic">{t.trustArch.title_em}</em>
        </h2>
        <p className="text-white/50 text-lg max-w-2xl mb-12 leading-relaxed">{t.trustArch.sub}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.trustArch.items.map((item, i) => (
            <article key={i} className="glass glow-hover rounded-2xl p-8 transition-all duration-300">
              <div className="mb-4">{icons[i]}</div>
              <h3 className="font-serif text-xl text-white mb-3">{item.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-white/60 text-base italic">{t.trustArch.conclusion}</p>
      </div>
    </section>
  )
}
