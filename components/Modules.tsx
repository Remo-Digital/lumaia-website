'use client'
import { useLanguage } from '@/lib/LanguageContext'

const glowColors = [
  'rgba(123,232,159,0.12)',
  'rgba(124,58,237,0.12)',
  'rgba(37,99,235,0.12)',
  'rgba(123,232,159,0.12)',
  'rgba(124,58,237,0.12)',
  'rgba(37,99,235,0.12)',
]

export default function Modules() {
  const { t } = useLanguage()

  return (
    <section id="modules" className="relative overflow-hidden py-24 px-6" style={{ background: '#03020a' }}>
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)', filter: 'blur(80px)', borderRadius: '50%' }} />

      {/* Rotating decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none animate-spin-slow opacity-[0.03]"
        style={{ border: '1px solid rgba(123,232,159,1)', borderRadius: '50%' }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase mb-4 text-center">{t.modules.label}</p>
        <h2 className="font-serif text-4xl md:text-5xl text-white text-center leading-[1.15] mb-3">{t.modules.title}</h2>
        <p className="text-white/40 text-center max-w-md mx-auto mb-14 leading-relaxed text-sm">
          {t.modules.sub}
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {t.modules.items.map((m, idx) => {
            const glow = glowColors[idx]
            return (
              <div key={m.title}
                className="glass rounded-2xl p-6 relative overflow-hidden group cursor-default transition-all duration-300 glow-hover"
                style={{ '--glow': glow } as React.CSSProperties}>
                {/* Top glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${glow.replace('0.12', '0.6')}, transparent)` }} />
                {/* Corner orb */}
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle, ${glow} 0%, transparent 70%)`, filter: 'blur(16px)' }} />

                <span className="glass-accent text-accent text-[0.65rem] font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full inline-block mb-4">{m.tag}</span>
                <h3 className="text-white font-medium text-base mb-2">{m.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{m.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
