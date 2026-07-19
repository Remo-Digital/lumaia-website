'use client'
import { useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

interface FAQProps {
  items?: ReadonlyArray<{ readonly q: string; readonly a: string }>
  showSchemaMarkup?: boolean
}

export default function FAQ({ items: customItems, showSchemaMarkup = true }: FAQProps) {
  const { t } = useLanguage()
  const [open, setOpen] = useState<number | null>(null)

  const items = customItems ?? t.faq.items

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <section className="relative overflow-hidden py-24 px-6" style={{ background: '#070512' }} aria-labelledby="faq-title">
      {showSchemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      )}

      <div className="absolute inset-0 diagonal-lines pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/4 right-0 w-80 h-80 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)', filter: 'blur(80px)', borderRadius: '50%' }} aria-hidden="true" />

      <div className="relative z-10 max-w-2xl mx-auto">
        {!customItems && (
          <>
            <p className="text-accent text-base font-semibold tracking-[0.18em] uppercase mb-4">{t.faq.label}</p>
            <h2 id="faq-title" className="font-serif text-5xl md:text-6xl text-white leading-[1.15] mb-12">
              {t.faq.title} <em className="gradient-text not-italic italic">{t.faq.title_em}</em>
            </h2>
          </>
        )}

        <div className="space-y-2" role="list">
          {items.map((faq, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden transition-all duration-300" role="listitem">
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center gap-4"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="text-white/80 text-base font-medium">{faq.q}</span>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full glass-accent flex items-center justify-center text-accent text-base transition-transform duration-300"
                  style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  aria-hidden="true"
                >+</span>
              </button>
              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-q-${i}`}
                hidden={open !== i}
              >
                {open === i && (
                  <div className="px-6 pb-5">
                    <div className="h-px mb-4" style={{ background: 'rgba(255,255,255,0.06)' }} aria-hidden="true" />
                    <p className="text-white/60 text-base leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
