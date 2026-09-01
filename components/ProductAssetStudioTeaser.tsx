'use client'
import { useLanguage } from '@/lib/LanguageContext'
import { localizedHref } from '@/lib/i18n'

export default function ProductAssetStudioTeaser() {
  const { t, locale } = useLanguage()

  return (
    <section className="relative overflow-hidden py-24 px-6" style={{ background: '#080614' }} aria-labelledby="pas-teaser-title">
      <div className="absolute inset-0 line-grid pointer-events-none" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,232,159,0.08) 0%, transparent 70%)', filter: 'blur(80px)', borderRadius: '50%', transform: 'translate(-30%, -20%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="glass-strong rounded-3xl p-10 md:p-14">
          <h2 id="pas-teaser-title" className="font-serif text-3xl md:text-4xl text-white leading-[1.2] mb-6">
            {t.pasTeaser.title}
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-4">{t.pasTeaser.p1}</p>
          <p className="text-white/70 text-base leading-relaxed mb-8">{t.pasTeaser.p2}</p>
          <a
            href={localizedHref('/plattform/product-asset-studio', locale)}
            className="text-accent font-semibold hover:underline underline-offset-2"
          >
            {t.pasTeaser.link} &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}
