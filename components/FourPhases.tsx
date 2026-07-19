'use client'
import { useLanguage } from '@/lib/LanguageContext'
import type { Locale } from '@/lib/translations'

function localizedHref(href: string, locale: Locale) {
  if (locale === 'en') return `/en${href}`
  return href
}

const phaseIcons = ['🎯', '🛠', '🚀', '📊']

export default function FourPhases() {
  const { t, locale } = useLanguage()

  return (
    <section className="relative overflow-hidden py-24 px-6" style={{ background: '#070512' }} aria-labelledby="four-phases-title">
      <div className="absolute inset-0 diagonal-lines pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,232,159,0.06) 0%, transparent 70%)', filter: 'blur(80px)', borderRadius: '50%' }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="text-accent text-base font-semibold tracking-[0.18em] uppercase mb-4">{t.fourPhases.label}</p>
        <h2 id="four-phases-title" className="font-serif text-5xl md:text-6xl text-white leading-[1.15] mb-4">
          {t.fourPhases.title} <em className="gradient-text not-italic italic">{t.fourPhases.title_em}</em>
        </h2>
        <p className="text-white/50 text-lg max-w-2xl mb-16 leading-relaxed">{t.fourPhases.sub}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.fourPhases.phases.map((phase, i) => (
            <article key={phase.num} className="glass glow-hover rounded-2xl p-8 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl" aria-hidden="true">{phaseIcons[i]}</span>
                <span className="text-accent text-sm font-semibold tracking-[0.15em] uppercase">{phase.num}</span>
                <h3 className="font-serif text-2xl text-white">{phase.title}</h3>
              </div>
              <p className="text-white/55 text-base leading-relaxed">{phase.desc}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-white/50 text-base">
          {t.fourPhases.modulesLink}{' '}
          <a href={localizedHref('/plattform', locale)} className="text-accent hover:underline underline-offset-2">
            {t.fourPhases.modulesLinkText} &rarr;
          </a>
        </p>
      </div>
    </section>
  )
}
