'use client'
import { useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

export default function FAQ() {
  const { t } = useLanguage()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="relative overflow-hidden py-24 px-6" style={{ background: '#070512' }}>
      <div className="absolute inset-0 diagonal-lines pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)', filter: 'blur(80px)', borderRadius: '50%' }} />

      <div className="relative z-10 max-w-2xl mx-auto">
        <p className="text-accent text-base font-semibold tracking-[0.18em] uppercase mb-4">{t.faq.label}</p>
        <h2 className="font-serif text-5xl md:text-6xl text-white leading-[1.15] mb-12">
          {t.faq.title} <em className="gradient-text not-italic italic">{t.faq.title_em}</em>
        </h2>

        <div className="space-y-2">
          {t.faq.items.map((faq, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden transition-all duration-300">
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center gap-4"
                onClick={() => setOpen(open === i ? null : i)}>
                <span className="text-white/80 text-base font-medium">{faq.q}</span>
                <span className="flex-shrink-0 w-6 h-6 rounded-full glass-accent flex items-center justify-center text-accent text-base transition-transform duration-300"
                  style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <div className="h-px mb-4" style={{ background: 'rgba(255,255,255,0.06)' }} />
                  <p className="text-white/60 text-base leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
