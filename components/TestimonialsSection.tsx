'use client'
import { useLanguage } from '@/lib/LanguageContext'

export default function TestimonialsSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden py-24 px-6" style={{ background: '#080614' }} aria-labelledby="testimonials-title">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,232,159,0.06) 0%, transparent 70%)', filter: 'blur(80px)', borderRadius: '50%' }} aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-accent text-base font-semibold tracking-[0.18em] uppercase mb-4">{t.testimonials.title}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {t.testimonials.items.map((item, i) => (
            <blockquote
              key={i}
              className="glass-strong rounded-2xl p-8 text-left flex flex-col"
              style={{ border: '1px solid rgba(123,232,159,0.1)' }}
            >
              <span className="font-serif text-5xl text-accent/40 leading-none mb-4" aria-hidden="true">&ldquo;</span>
              <p className="text-white/80 text-lg leading-relaxed mb-8 italic flex-1">{item.quote}</p>
              <footer className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white/60 text-sm font-semibold flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, rgba(123,232,159,0.15) 0%, rgba(14,156,176,0.15) 100%)', border: '1px solid rgba(123,232,159,0.2)' }}
                  aria-hidden="true">
                  {item.name[1]}
                </div>
                <div>
                  <cite className="text-white text-sm font-semibold not-italic block">{item.name}</cite>
                  <span className="text-white/50 text-xs">{item.role}, {item.company}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-8 text-white/30 text-xs italic">{t.testimonials.note}</p>
      </div>
    </section>
  )
}
