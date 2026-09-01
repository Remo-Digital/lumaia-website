import type { Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import { LanguageProvider } from '@/lib/LanguageContext'
import { locales, getHreflangUrls } from '@/lib/i18n'
import type { Locale } from '@/lib/translations'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const hreflang = getHreflangUrls('/')

  const titles: Record<string, string> = {
    de: 'LumAIa \u2013 Die Agentic Agency Plattform f\u00fcr Marketing',
    en: 'LumAIa \u2013 The Agentic Agency Platform for Marketing',
  }

  const descriptions: Record<string, string> = {
    de: 'LumAIa automatisiert den gesamten Marketing-Workflow \u2013 von Strategie bis Kampagnen-Optimierung. 10\u00d7 schneller, 70% g\u00fcnstiger, 100% Brand-Safe.',
    en: 'LumAIa automates the entire marketing workflow \u2013 from strategy to campaign optimization. 10\u00d7 faster, 70% cheaper, 100% brand-safe.',
  }

  return {
    title: {
      default: titles[locale] || titles.de,
      template: '%s \u2013 LumAIa',
    },
    description: descriptions[locale] || descriptions.de,
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        { url: '/favicon.svg', type: 'image/svg+xml' },
      ],
      apple: { url: '/apple-touch-icon.png' },
    },
    manifest: '/site.webmanifest',
    alternates: {
      canonical: hreflang[locale === 'en' ? 'en-CH' : 'de-CH'],
      languages: hreflang,
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!locales.includes(locale as typeof locales[number])) {
    notFound()
  }

  return (
    <html lang={locale} className={`${inter.variable} ${lexend.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MCKD3V6S');`}
        </Script>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-21LLYMZSE2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-21LLYMZSE2');`}
        </Script>
      </head>
      <body className="font-sans bg-ink text-white antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MCKD3V6S"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-ink focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold">
          Skip to main content
        </a>
        <LanguageProvider locale={locale as Locale}>{children}</LanguageProvider>
      </body>
    </html>
  )
}
