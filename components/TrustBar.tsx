'use client'
import { useLanguage } from '@/lib/LanguageContext'

export default function TrustBar() {
  const { t } = useLanguage()

  return (
    <div className="relative overflow-hidden py-5" style={{ background: 'rgba(3,2,10,0.95)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-4xl mx-auto px-6 flex flex-wrap items-center justify-center gap-3 text-sm tracking-[0.15em] uppercase">
        <span className="text-white/50">{t.trust.powered}</span>
        {['iundf Gruppe', 'iundf Dewave', 'Inhalt & Form', '15+ Jahre Markenerfahrung'].map((item, i) => (
          <span key={item} className="flex items-center gap-3">
            {i > 0 && <span className="w-1 h-1 rounded-full bg-accent/30 inline-block" />}
            <span className="glass-accent text-accent/70 px-3 py-1 rounded-full">{item}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
