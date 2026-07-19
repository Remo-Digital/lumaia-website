'use client'
import { useLanguage } from '@/lib/LanguageContext'
import { localizedHref } from '@/lib/i18n'

export default function AgenticCommerceTeaser() {
  const { t, locale } = useLanguage()

  return (
    <section className="relative overflow-hidden py-24 px-6" style={{ background: '#080614' }} aria-labelledby="agentic-teaser-title">
      <div className="absolute inset-0 line-grid pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(14,156,176,0.08) 0%, transparent 70%)', filter: 'blur(80px)', borderRadius: '50%', transform: 'translate(30%, -20%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="glass-strong rounded-3xl p-10 md:p-14">
          <h2 id="agentic-teaser-title" className="font-serif text-3xl md:text-4xl text-white leading-[1.2] mb-6">
            {t.agenticTeaser.title}
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-4">{t.agenticTeaser.p1}</p>
          <p className="text-white/70 text-base leading-relaxed mb-8">{t.agenticTeaser.p2}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={localizedHref('/use-cases/agentic-commerce', locale)}
              className="text-accent font-semibold hover:underline underline-offset-2"
            >
              {t.agenticTeaser.link1} &rarr;
            </a>
            <a
              href={localizedHref('/use-cases', locale)}
              className="text-white/70 font-medium hover:text-white/80 transition-colors"
            >
              {t.agenticTeaser.link2} &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
