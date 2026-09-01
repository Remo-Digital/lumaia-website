'use client'
import { useLanguage } from '@/lib/LanguageContext'

export default function TestimonialsSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden py-24 px-6" style={{ background: '#080614' }} aria-labelledby="testimonials-title">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 id="testimonials-title" className="font-serif text-4xl md:text-5xl text-white leading-[1.15] mb-12">
          {t.testimonials.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.testimonials.items.map((item, i) => (
            <blockquote key={i} className="glass-strong rounded-2xl p-8">
              <p className="text-white/70 text-base leading-relaxed mb-6 italic">&ldquo;{item.quote}&rdquo;</p>
              <footer className="flex items-center gap-3">
                {/* Placeholder avatar */}
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/50 text-sm font-semibold" aria-hidden="true">
                  {item.name[1]}
                </div>
                <div>
                  <cite className="text-white/80 text-sm font-medium not-italic block">{item.name}</cite>
                  <span className="text-white/60 text-xs">{item.role}, {item.company}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-6 text-white/50 text-sm italic">{t.testimonials.note}</p>
      </div>
    </section>
  )
}
