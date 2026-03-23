'use client'
import { useLanguage } from '@/lib/LanguageContext'
import HubSpotForm from '@/components/HubSpotForm'

export default function CTAFinal() {
  const { t } = useLanguage()

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
        <span className="glass-accent text-accent text-base font-semibold tracking-[0.18em] uppercase px-4 py-2 rounded-full inline-block mb-6">{t.cta.label}</span>
        <h2 className="font-serif text-5xl md:text-6xl text-white leading-[1.1] mb-4">
          {t.cta.title} <em className="gradient-text not-italic italic">{t.cta.title_em}</em> –<br />{t.cta.title_2}
        </h2>
        <p className="text-white/60 mb-10 leading-relaxed text-base">
          {t.cta.sub}
        </p>

        <div className="glass-strong rounded-3xl p-8 text-left relative">
          {/* Accent top line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(123,232,159,0.6), transparent)' }} />
          <HubSpotForm
            consentText="Ich habe die"
            privacyHref="/datenschutz"
            privacyLabel="Datenschutzerklärung gelesen und akzeptiere sie"
          />
        </div>
      </div>
    </section>
  )
}
