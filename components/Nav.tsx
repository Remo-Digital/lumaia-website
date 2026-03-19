'use client'
import { useLanguage } from '@/lib/LanguageContext'

export default function Nav() {
  const { t } = useLanguage()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
      style={{ background: 'rgba(3,2,10,0.7)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <a href="#" className="font-serif text-2xl gradient-text tracking-wide">Lumaia</a>
      <div className="flex items-center gap-3">
        <a href="#demo"
          className="glass-accent text-accent text-sm font-medium px-5 py-2.5 rounded-full tracking-wide transition-all duration-200 hover:bg-accent/10">
          {t.nav.cta}
        </a>
      </div>
    </nav>
  )
}
