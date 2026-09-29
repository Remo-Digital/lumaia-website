'use client'
import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'

const realLogos = [
  { src: '/sailclass_logo_white.svg', alt: 'Sailclass', width: 140, height: 40 },
]

const placeholderLogos = [
  'Kundenlogo 2',
  'Kundenlogo 3',
  'Kundenlogo 4',
  'Kundenlogo 5',
]

export default function TrustLogos() {
  const { t } = useLanguage()

  return (
    <section className="py-12 px-6" aria-label={t.trustLogos.title}>
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-white/50 text-xs font-semibold tracking-[0.2em] uppercase mb-8">{t.trustLogos.title}</p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {realLogos.map((logo) => (
            <div key={logo.src} className="glass rounded-lg px-6 py-3 flex items-center justify-center">
              <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="opacity-70 hover:opacity-100 transition-opacity duration-200" />
            </div>
          ))}
          {placeholderLogos.map((name, i) => (
            <div
              key={i}
              className="glass rounded-lg px-6 py-3 text-white/30 text-sm font-medium flex flex-col items-center gap-0.5"
              aria-label={name}
            >
              <span>{name}</span>
              <span className="text-white/15 text-[9px]">200 × 60 px · .webp · max 200 KB</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
