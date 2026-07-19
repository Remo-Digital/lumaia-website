'use client'
import { useLanguage } from '@/lib/LanguageContext'

export default function MetricsBar() {
  const { t } = useLanguage()

  return (
    <div className="border-t pt-10 grid grid-cols-2 md:grid-cols-4 gap-6" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      {t.hero.stats.map((stat) => (
        <div key={stat.value} className="glass rounded-2xl px-5 py-4" role="figure" aria-label={`${stat.value} ${stat.label}`}>
          <div className="font-serif text-3xl gradient-text mb-1">{stat.value}</div>
          <div className="text-white/70 text-sm tracking-widest uppercase">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
