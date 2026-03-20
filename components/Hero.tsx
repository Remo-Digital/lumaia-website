'use client'
import { useLanguage } from '@/lib/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
      style={{ background: 'linear-gradient(135deg, #03020a 0%, #0d0822 45%, #04021a 100%)' }}>

      {/* Geometric background layers */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
      <div className="absolute inset-0 line-grid pointer-events-none" />

      {/* Geometric shapes */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none animate-float"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.13) 0%, transparent 65%)', filter: 'blur(80px)', borderRadius: '50%', transform: 'translate(30%, -20%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,232,159,0.12) 0%, transparent 65%)', filter: 'blur(80px)', borderRadius: '50%', transform: 'translate(-20%, 20%)' }} />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)', filter: 'blur(60px)', borderRadius: '50%', transform: 'translate(-50%, -50%)' }} />

      {/* Rotating geometric ring */}
      <div className="absolute top-16 right-16 w-64 h-64 pointer-events-none animate-spin-slow opacity-10"
        style={{ border: '1px solid rgba(123,232,159,0.4)', borderRadius: '50%' }} />
      <div className="absolute top-24 right-24 w-48 h-48 pointer-events-none animate-spin-slow opacity-[0.06]"
        style={{ border: '1px solid rgba(123,232,159,0.4)', borderRadius: '50%', animationDirection: 'reverse' }} />

      {/* Angular corner accent */}
      <div className="absolute bottom-32 right-8 w-32 h-32 pointer-events-none opacity-[0.06]"
        style={{ border: '1px solid rgba(123,232,159,0.5)', transform: 'rotate(45deg)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        {/* Label */}
        <div className="animate-fade-up-1 inline-flex items-center gap-2 glass-accent text-accent text-xs font-semibold tracking-[0.18em] uppercase px-4 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
          {t.hero.label}
        </div>

        {/* H1 */}
        <h1 className="animate-fade-up-2 font-serif text-6xl md:text-8xl text-white leading-[1.05] mb-6 max-w-4xl">
          {t.hero.h1}<em className="gradient-text not-italic italic">{t.hero.h1_em}</em>
          <br />{t.hero.h1_2}
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up-3 text-lg text-white/50 max-w-xl mb-10 leading-relaxed">
          {t.hero.sub}
        </p>

        {/* CTA group */}
        <div className="animate-fade-up-4 flex flex-col sm:flex-row items-start gap-4 mb-4">
          <a href="#demo"
            className="text-ink font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #7be89f 0%, #0e9cb0 100%)', boxShadow: '0 8px 32px rgba(79,193,168,0.25)' }}>
            {t.hero.cta_primary}
          </a>
          <a href="#modules"
            className="glass text-white/70 hover:text-white px-8 py-4 rounded-full text-base transition-all duration-200 hover:-translate-y-0.5">
            {t.hero.cta_secondary}
          </a>
        </div>

        {/* Microcopy */}
        <p className="animate-fade-up-4 text-white/50 text-base mb-16 tracking-wide">
          {t.hero.microcopy}
        </p>

        {/* Stats row */}
        <div className="animate-fade-up-4 border-t pt-10 grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          {t.hero.stats.map((stat) => (
            <div key={stat.value} className="glass rounded-2xl px-5 py-4">
              <div className="font-serif text-3xl gradient-text mb-1">{stat.value}</div>
              <div className="text-white/55 text-sm tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
