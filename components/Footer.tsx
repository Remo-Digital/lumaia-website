'use client'
import { useLanguage } from '@/lib/LanguageContext'

export default function Footer() {
  const { t, locale } = useLanguage()

  return (
    <footer className="relative py-8 px-6" style={{ background: '#02010a', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-serif text-xl gradient-text">Lumaia</span>
        <span className="text-white/20 text-xs">{t.footer.copyright}</span>
        <div className="flex items-center gap-6 text-xs">
          {t.footer.links.map(({ label, href }) => (
            <a key={href} href={href} className="text-white/25 hover:text-accent transition-colors duration-200">{label}</a>
          ))}
          <a
            href={locale === 'en' ? '/' : '/en'}
            className="glass-accent text-accent/70 hover:text-accent font-semibold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full transition-all duration-200 hover:bg-accent/10">
            {locale === 'en' ? 'DE' : 'EN'}
          </a>
        </div>
      </div>
    </footer>
  )
}
