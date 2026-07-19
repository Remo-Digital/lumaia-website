import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Asset Studio – Brand-konforme KI-Produktbilder | LumAIa',
  description: 'Erstellen Sie Brand-konforme Produktbilder für Ihren Onlineshop – EU-AI-Act konform & C2PA-Nachweis. Schnell, kostenlos & ohne Kreditkarte starten.',
  alternates: {
    canonical: 'https://lumaia.studio/plattform/product-asset-studio',
    languages: {
      'de-CH': 'https://lumaia.studio/plattform/product-asset-studio',
      'de-DE': 'https://lumaia.studio/plattform/product-asset-studio',
      'de-AT': 'https://lumaia.studio/plattform/product-asset-studio',
      'en-CH': 'https://lumaia.studio/en/plattform/product-asset-studio',
      'en-US': 'https://lumaia.studio/en/plattform/product-asset-studio',
      'x-default': 'https://lumaia.studio/plattform/product-asset-studio',
    },
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
