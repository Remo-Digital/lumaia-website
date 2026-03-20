'use client'
import { useLanguage } from '@/lib/LanguageContext'

export default function Testimonial() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden py-28 px-6" style={{ background: '#03020a' }}>
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none animate-float"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 65%)', filter: 'blur(80px)', borderRadius: '50%' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,232,159,0.08) 0%, transparent 65%)', filter: 'blur(60px)', borderRadius: '50%' }} />

      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-[0.04] animate-spin-slow"
        style={{ border: '1px solid rgba(123,232,159,1)', borderRadius: '50%' }} />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="glass-strong rounded-3xl p-10 md:p-14 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(123,232,159,0.5), transparent)' }} />
          <blockquote className="font-serif text-3xl md:text-4xl text-white/80 italic leading-relaxed mb-8">
            {t.testimonial.quote}
          </blockquote>
          <cite className="not-italic text-sm tracking-[0.15em] uppercase gradient-text font-semibold">
            {t.testimonial.cite}
          </cite>
        </div>
      </div>
    </section>
  )
}
