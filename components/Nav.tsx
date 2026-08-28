'use client'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'
import { modules, phases } from '@/lib/modules'
import { localizedHref } from '@/lib/i18n'

export default function Nav() {
  const { t, locale } = useLanguage()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [bannerDismissed, setBannerDismissed] = useState(false)
  const megaRef = useRef<HTMLDivElement>(null)

  // Build language switcher URL: strip current locale prefix, prepend other locale
  const otherLocale = locale === 'en' ? 'de' : 'en'
  const pathWithoutLocale = pathname.replace(/^\/(de|en)/, '') || '/'
  const switchLocaleHref = `/${otherLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const phaseOrder = ['plan', 'build', 'publish', 'report-learn'] as const

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Banner */}
      {!bannerDismissed && (
        <div
          role="banner"
          className="relative flex items-center justify-center gap-3 px-4 py-2 text-sm text-center"
          style={{ background: 'linear-gradient(90deg, rgba(123,232,159,0.15) 0%, rgba(14,156,176,0.15) 100%)', borderBottom: '1px solid rgba(123,232,159,0.12)' }}
        >
          <span className="text-white/90">{t.nav.banner}</span>
          <a
            href={localizedHref('/plattform/product-asset-studio', locale)}
            className="font-semibold text-accent hover:underline underline-offset-2"
          >
            {t.nav.bannerCta} &rarr;
          </a>
          <button
            onClick={() => setBannerDismissed(true)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white/80 transition-colors p-1"
            aria-label={locale === 'de' ? 'Banner schliessen' : 'Dismiss banner'}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}

      {/* Navigation Bar */}
      <nav
        style={{ background: 'rgba(3,2,10,0.85)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        aria-label={locale === 'de' ? 'Hauptnavigation' : 'Main navigation'}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-4">
          {/* Logo */}
          <a href={localizedHref('/', locale)} aria-label="LumAIa Home">
            <Image src="/LUMAIA_Logo.svg" alt="LumAIa" width={120} height={32} priority />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Platform Dropdown 
            <div ref={megaRef} className="relative">
              <button
                onClick={() => setMegaOpen(!megaOpen)}
                className="text-white/80 text-sm font-medium transition-colors duration-200 hover:text-white flex items-center gap-1"
                aria-expanded={megaOpen}
                aria-haspopup="true"
              >
                {t.nav.platform}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`} aria-hidden="true">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {megaOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[900px] rounded-2xl p-6 shadow-2xl z-[999]"
                  style={{ background: '#0d0a1a', border: '1px solid rgba(255,255,255,0.08)' }}
                  role="menu"
                >
                  <div className="grid grid-cols-4 gap-6">
                    {phaseOrder.map(phase => (
                      <div key={phase}>
                        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase mb-3" style={{ color: phases[phase].color }}>
                          {phases[phase][locale]}
                        </h3>
                        <ul className="space-y-1.5">
                          {modules.filter(m => m.phase === phase).map(mod => (
                            <li key={mod.slug}>
                              <a
                                href={localizedHref(mod.url, locale)}
                                className="group flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                                role="menuitem"
                                onClick={() => setMegaOpen(false)}
                              >
                                <span className="flex-1">{mod.name[locale]}</span>
                                {mod.status === 'live' && (
                                  <span className="text-[10px] font-semibold tracking-wider uppercase text-accent bg-accent/10 px-1.5 py-0.5 rounded">Live</span>
                                )}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <a
                      href={localizedHref('/plattform', locale)}
                      className="text-sm text-accent hover:underline underline-offset-2"
                      onClick={() => setMegaOpen(false)}
                    >
                      {locale === 'de' ? 'Alle 19 Module ansehen' : 'View all 19 modules'} &rarr;
                    </a>
                  </div>
                </div>
              )}
            </div>
            

            <a href={localizedHref('/use-cases', locale)} className="text-white/80 text-sm font-medium transition-colors duration-200 hover:text-white">
              {t.nav.useCases}
            </a>
            
            <a href={localizedHref('/blog', locale)} className="text-white/80 text-sm font-medium transition-colors duration-200 hover:text-white">
              {t.nav.blog}
            </a> 
            */}
            <a href={localizedHref('/plattform/product-asset-studio', locale)} className="text-white/80 text-sm font-medium transition-colors duration-200 hover:text-white">
              Product Asset Studio
            </a>
            <a href={localizedHref('/use-cases/agentic-commerce', locale)} className="text-white/80 text-sm font-medium transition-colors duration-200 hover:text-white">
              {t.nav.agentic}
            </a>
            <a href={localizedHref('/pricing', locale)} className="text-white/80 text-sm font-medium transition-colors duration-200 hover:text-white">
              {t.nav.pricing}
            </a>
            <a href={localizedHref('/contact', locale)} className="text-white/80 text-sm font-medium transition-colors duration-200 hover:text-white">
              {t.nav.contact}
            </a>

            <a
              href={localizedHref('/contact', locale)}
              className="inline-block text-ink font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #7be89f 0%, #0e9cb0 100%)', boxShadow: '0 8px 32px rgba(79,193,168,0.25)' }}
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white/80 hover:text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={locale === 'de' ? 'Menü öffnen' : 'Open menu'}
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 top-[65px] z-40 overflow-y-auto" style={{ background: 'rgba(3,2,10,0.97)' }}>
            <div className="px-6 py-8 space-y-6">
             {/*  <a href={localizedHref('/plattform', locale)} className="block text-lg text-white/90 hover:text-white" onClick={() => setMobileOpen(false)}>
                {t.nav.platform}
              </a>
              <a href={localizedHref('/use-cases', locale)} className="block text-lg text-white/90 hover:text-white" onClick={() => setMobileOpen(false)}>
                {t.nav.useCases}
              </a>
              <a href={localizedHref('/blog', locale)} className="block text-lg text-white/90 hover:text-white" onClick={() => setMobileOpen(false)}>
                {t.nav.blog}
              </a> */}
              <a href={localizedHref('/plattform/product-asset-studio', locale)} className="block text-lg text-white/90 hover:text-white" onClick={() => setMobileOpen(false)}>
                Product Asset Studio
              </a>
              <a href={localizedHref('/use-cases/agentic-commerce', locale)} className="block text-lg text-white/90 hover:text-white" onClick={() => setMobileOpen(false)}>
                {t.nav.agentic}
              </a>
              <a href={localizedHref('/pricing', locale)} className="block text-lg text-white/90 hover:text-white" onClick={() => setMobileOpen(false)}>
                {t.nav.pricing}
              </a>
              <a href={localizedHref('/contact', locale)} className="block text-lg text-white/90 hover:text-white" onClick={() => setMobileOpen(false)}>
                {t.nav.contact}
              </a>
              <div className="pt-4 border-t border-white/10">
                <a
                  href={localizedHref('/contact', locale)}
                  className="inline-block text-ink font-semibold px-6 py-3 rounded-full"
                  style={{ background: 'linear-gradient(135deg, #7be89f 0%, #0e9cb0 100%)' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {t.nav.cta}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={switchLocaleHref}
                  className="text-sm text-accent/70 hover:text-accent font-semibold tracking-[0.15em] uppercase"
                  onClick={() => setMobileOpen(false)}
                >
                  {otherLocale.toUpperCase()}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
