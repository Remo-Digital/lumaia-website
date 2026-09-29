'use client'
import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'

const logos = [
  { src: '/sailclass_logo_white.svg', alt: 'Sailclass', width: 140, height: 40 },
  { src: '/AK Primary Logo White.svg', alt: 'AK', width: 140, height: 40 },
]

export default function TrustLogos() {
  const { t } = useLanguage()

  return (
    <section className="py-12 px-6" aria-label={t.trustLogos.title}>
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-white/50 text-xs font-semibold tracking-[0.2em] uppercase mb-8">{t.trustLogos.title}</p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {logos.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="opacity-60 hover:opacity-100 transition-opacity duration-200"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
