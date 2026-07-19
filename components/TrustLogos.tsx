'use client'
import { useLanguage } from '@/lib/LanguageContext'

export default function TrustLogos() {
  const { t } = useLanguage()

  const placeholderLogos = [
    'Kundenlogo 1',
    'Kundenlogo 2',
    'Kundenlogo 3',
    'Kundenlogo 4',
    'Kundenlogo 5',
  ]

  return (
    <section className="py-12 px-6" aria-label={t.trustLogos.title}>
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-white/50 text-xs font-semibold tracking-[0.2em] uppercase mb-8">{t.trustLogos.title}</p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {placeholderLogos.map((name, i) => (
            <div
              key={i}
              className="glass rounded-lg px-6 py-3 text-white/30 text-sm font-medium"
              aria-label={name}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
