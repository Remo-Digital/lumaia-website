'use client'
import { useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

export default function CTAFinal() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="demo" className="relative overflow-hidden py-28 px-6" style={{ background: 'linear-gradient(135deg, #03020a 0%, #0d0822 45%, #04021a 100%)' }}>
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="absolute inset-0 line-grid pointer-events-none" />

      {/* Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 65%)', filter: 'blur(80px)', borderRadius: '50%', transform: 'translate(30%, -30%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,232,159,0.1) 0%, transparent 65%)', filter: 'blur(80px)', borderRadius: '50%', transform: 'translate(-20%, 20%)' }} />

      {/* Rotating rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none animate-spin-slow opacity-[0.04]"
        style={{ border: '1px solid rgba(123,232,159,1)', borderRadius: '50%' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-[0.03]"
        style={{ border: '1px solid rgba(124,58,237,1)', borderRadius: '50%', animation: 'spin-slow 20s linear infinite reverse' }} />

      {/* Angular accent shapes */}
      <div className="absolute bottom-16 left-16 w-24 h-24 pointer-events-none opacity-[0.07]"
        style={{ border: '1px solid rgba(123,232,159,0.6)', transform: 'rotate(45deg)' }} />
      <div className="absolute top-16 right-32 w-16 h-16 pointer-events-none opacity-[0.05]"
        style={{ border: '1px solid rgba(124,58,237,0.6)', transform: 'rotate(30deg)' }} />

      <div className="relative z-10 max-w-lg mx-auto text-center">
        <span className="glass-accent text-accent text-xs font-semibold tracking-[0.18em] uppercase px-4 py-2 rounded-full inline-block mb-6">{t.cta.label}</span>
        <h2 className="font-serif text-4xl md:text-5xl text-white leading-[1.1] mb-4">
          {t.cta.title} <em className="gradient-text not-italic italic">{t.cta.title_em}</em> –<br />{t.cta.title_2}
        </h2>
        <p className="text-white/40 mb-10 leading-relaxed text-sm">
          {t.cta.sub}
        </p>

        <div className="glass-strong rounded-3xl p-8 text-left relative">
          {/* Accent top line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(123,232,159,0.6), transparent)' }} />

          {submitted ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">✓</div>
              <p className="text-white font-medium mb-2">{t.cta.form.success_title}</p>
              <p className="text-white/40 text-sm">{t.cta.form.success_sub}</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder={t.cta.form.first} required
                  className="glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-accent/40 w-full" />
                <input type="text" placeholder={t.cta.form.last} required
                  className="glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-accent/40 w-full" />
              </div>
              <input type="email" placeholder={t.cta.form.email} required
                className="glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-accent/40 w-full" />
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder={t.cta.form.company} required
                  className="glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-accent/40 w-full" />
                <select required
                  className="glass rounded-xl px-4 py-3 text-sm text-white/50 focus:outline-none focus:border-accent/40 w-full"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <option value="" disabled>{t.cta.form.industry}</option>
                  {t.cta.form.industries.map(ind => (
                    <option key={ind} value={ind} className="bg-gray-900 text-white">{ind}</option>
                  ))}
                </select>
              </div>
              <button type="submit"
                className="w-full py-4 rounded-xl font-semibold text-ink text-sm tracking-wide mt-2 transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #7be89f 0%, #0e9cb0 100%)', boxShadow: '0 8px 32px rgba(79,193,168,0.2)' }}>
                {t.cta.form.submit}
              </button>
              <p className="text-white/20 text-xs text-center leading-relaxed pt-1">
                {t.cta.form.privacy}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
