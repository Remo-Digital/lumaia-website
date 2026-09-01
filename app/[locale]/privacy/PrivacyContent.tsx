'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/LanguageContext'

export default function PrivacyContent() {
  const { t } = useLanguage()
  const p = t.privacy

  return (
    <>
      <Nav />
      <main id="main-content" className="relative min-h-screen pt-28 pb-20 px-6"
        style={{ background: 'linear-gradient(135deg, #03020a 0%, #0d0822 45%, #04021a 100%)' }}>
        <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-3xl mx-auto">
          <header className="text-center mb-12 animate-fade-up-1">
            <span className="glass-accent text-accent text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full">
              {p.label}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl mt-6 mb-4">
              {p.title}<em className="gradient-text not-italic">{p.title_em}</em>
            </h1>
            <p className="text-white/50 text-sm">{p.last_updated}</p>
          </header>

          <article className="glass rounded-2xl p-8 md:p-12 animate-fade-up-2 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-white/90 [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:text-white/60 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-white/60 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_li]:leading-relaxed [&_li]:mb-1">
            <h2>1. Verantwortliche Stelle</h2>
            <p>iundf Dewave AG, Schweiz<br />E-Mail: hello@lumaia.ai</p>

            <h2>2. Erhebung und Verarbeitung personenbezogener Daten</h2>
            <p>Wir erheben personenbezogene Daten nur, soweit dies f&uuml;r die Bereitstellung unserer Dienstleistungen erforderlich ist. Dies umfasst Daten, die Sie uns aktiv mitteilen (z. B. &uuml;ber Kontaktformulare oder Demo-Anfragen), sowie technische Daten, die beim Besuch unserer Website automatisch anfallen.</p>

            <h2>3. Zweck der Datenverarbeitung</h2>
            <p>Ihre Daten werden ausschlie&szlig;lich zu folgenden Zwecken verarbeitet:</p>
            <ul>
              <li>Bearbeitung von Anfragen und Demo-Buchungen</li>
              <li>Bereitstellung und Verbesserung unserer Dienste</li>
              <li>Kommunikation mit Ihnen als Interessent oder Kunde</li>
            </ul>

            <h2>4. Weitergabe an Dritte</h2>
            <p>Ihre personenbezogenen Daten werden nicht an Dritte weitergegeben, es sei denn, dies ist zur Vertragserf&uuml;llung notwendig oder Sie haben ausdr&uuml;cklich eingewilligt.</p>

            <h2>5. Cookies und Tracking</h2>
            <p>Unsere Website verwendet technisch notwendige Cookies sowie &ndash; mit Ihrer Einwilligung &ndash; Analyse- und Marketing-Tools. Sie k&ouml;nnen Ihre Cookie-Einstellungen jederzeit anpassen.</p>

            <h2>6. Ihre Rechte</h2>
            <p>Sie haben das Recht auf Auskunft, Berichtigung, L&ouml;schung und Einschr&auml;nkung der Verarbeitung Ihrer Daten sowie das Recht auf Daten&uuml;bertragbarkeit. Wenden Sie sich hierzu an: hello@lumaia.ai</p>

            <h2>7. Kontakt</h2>
            <p>Bei Fragen zum Datenschutz wenden Sie sich bitte an: <a href="mailto:hello@lumaia.ai" className="text-accent/70 hover:text-accent transition-colors">hello@lumaia.ai</a></p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
