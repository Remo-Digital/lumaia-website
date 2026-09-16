'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/lib/LanguageContext'
import { localizedHref, switchLocalePath } from '@/lib/i18n'

export default function Footer() {
  const { t, locale } = useLanguage()
  const pathname = usePathname()

  const otherLocale = locale === 'en-ch' ? 'de-ch' : 'en-ch'
  const pathWithoutLocale = pathname.replace(/^\/(de-ch|en-ch)/, '') || '/'
  const switchLocaleHref = `/${otherLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`

  return (
    <footer
      className="relative py-16 px-6"
      style={{ background: '#02010a', borderTop: '1px solid rgba(255,255,255,0.04)' }}
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image src="/LUMAIA_Logo.svg" alt="LumAIa" width={100} height={28} />
            <p className="text-white/60 text-sm mt-4 leading-relaxed">
              {locale === 'de-ch'
                ? 'Die Agentic Agency Plattform f\u00fcr E-Commerce.'
                : 'The Agentic Agency Platform for E-Commerce.'}
            </p>
          </div>

          {/* Platform */}
          <nav>
            <h4 className="text-white/70 text-xs font-semibold tracking-[0.15em] uppercase mb-4">{t.footer.platform}</h4>
            <ul className="space-y-2">
              {/* <li><a href={localizedHref('/plattform', locale)} className="text-white/60 text-sm hover:text-accent transition-colors">{locale === 'de-ch' ? 'Plattform-\u00dcbersicht' : 'Platform Overview'}</a></li> */}
              <li><a href={localizedHref('/plattform/product-asset-studio', locale)} className="text-white/60 text-sm hover:text-accent transition-colors">Product Asset Studio</a></li>
              <li><a href={localizedHref('/pricing', locale)} className="text-white/60 text-sm hover:text-accent transition-colors">{t.nav.pricing}</a></li>
            </ul>
          </nav>

          {/* Use Cases & Resources */}
          <nav>
            <h4 className="text-white/70 text-xs font-semibold tracking-[0.15em] uppercase mb-4">{t.footer.useCases}</h4>
            <ul className="space-y-2">
              {/* <li><a href={localizedHref('/use-cases', locale)} className="text-white/60 text-sm hover:text-accent transition-colors">{locale === 'de-ch' ? 'Alle Use Cases' : 'All Use Cases'}</a></li> */}
              <li><a href={localizedHref('/use-cases/agentic-commerce', locale)} className="text-white/60 text-sm hover:text-accent transition-colors">Agentic Commerce</a></li>
              {/* <li><a href={localizedHref('/blog', locale)} className="text-white/60 text-sm hover:text-accent transition-colors">Blog</a></li> */}
              
            </ul>
          </nav>

          {/* Company */}
          <nav>
            <h4 className="text-white/70 text-xs font-semibold tracking-[0.15em] uppercase mb-4">{t.footer.company}</h4>
            <ul className="space-y-2">
              {t.footer.links.map(({ label, href }) => (
                <li key={href}>
                  <a href={localizedHref(href, locale)} className="text-white/60 text-sm hover:text-accent transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <span className="text-white/50 text-sm">{t.footer.copyright}</span>
          <div className="flex items-center gap-1 text-sm font-semibold tracking-[0.1em] uppercase">
            <a
              href={`/de-ch${pathWithoutLocale === '/' ? '' : switchLocalePath(pathWithoutLocale || '/', locale, 'de-ch')}`}
              className={`px-2 py-1 rounded transition-colors ${locale === 'de-ch' ? 'text-accent' : 'text-white/40 hover:text-white/70'}`}
              aria-label="Deutsch"
            >
              DE
            </a>
            <span className="text-white/20">|</span>
            <a
              href={`/en-ch${pathWithoutLocale === '/' ? '' : switchLocalePath(pathWithoutLocale || '/', locale, 'en-ch')}`}
              className={`px-2 py-1 rounded transition-colors ${locale === 'en-ch' ? 'text-accent' : 'text-white/40 hover:text-white/70'}`}
              aria-label="English"
            >
              EN
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
