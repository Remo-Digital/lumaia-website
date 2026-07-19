import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Asset Studio \u2013 Brand-konforme KI-Produktbilder | LumAIa',
  description: 'Erstellen Sie Brand-konforme Produktbilder f\u00fcr Ihren Onlineshop \u2013 EU-AI-Act konform & C2PA-Nachweis. Schnell, kostenlos & ohne Kreditkarte starten.',
  alternates: {
    canonical: 'https://lumaia.studio/agentic-commerce',
    languages: {
      'de-CH': 'https://lumaia.studio/agentic-commerce',
      'x-default': 'https://lumaia.studio/agentic-commerce',
    },
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
