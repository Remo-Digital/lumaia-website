'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/LanguageContext'

export default function PrivacyPage() {
  const { t } = useLanguage()
  const p = t.privacy

  return (
    <>
      <Nav />
      <main className="relative min-h-screen pt-28 pb-20 px-6"
        style={{ background: 'linear-gradient(135deg, #03020a 0%, #0d0822 45%, #04021a 100%)' }}>
        <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

        <div className="relative max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-up-1">
            <span className="glass-accent text-accent text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full">
              {p.label}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl mt-6 mb-4">
              {p.title}<em className="gradient-text not-italic">{p.title_em}</em>
            </h1>
            <p className="text-white/30 text-sm">{p.last_updated}</p>
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 animate-fade-up-2 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-white/80 [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:text-white/45 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-white/45 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_li]:leading-relaxed [&_li]:mb-1">
            <h2>1. Responsible Party</h2>
            <p>iundf Dewave AG, Switzerland<br />Email: hello@lumaia.ai</p>

            <h2>2. Collection and Processing of Personal Data</h2>
            <p>We only collect personal data to the extent necessary for the provision of our services. This includes data you actively provide to us (e.g. via contact forms or demo requests) as well as technical data that is automatically generated when you visit our website.</p>

            <h2>3. Purpose of Data Processing</h2>
            <p>Your data is processed exclusively for the following purposes:</p>
            <ul>
              <li>Processing inquiries and demo bookings</li>
              <li>Providing and improving our services</li>
              <li>Communicating with you as a prospect or customer</li>
            </ul>

            <h2>4. Disclosure to Third Parties</h2>
            <p>Your personal data will not be passed on to third parties unless this is necessary for the fulfilment of the contract or you have expressly consented.</p>

            <h2>5. Cookies and Tracking</h2>
            <p>Our website uses technically necessary cookies and – with your consent – analytics and marketing tools. You can adjust your cookie settings at any time.</p>

            <h2>6. Your Rights</h2>
            <p>You have the right to access, rectify, delete and restrict the processing of your data, as well as the right to data portability. Please contact us at: hello@lumaia.ai</p>

            <h2>7. Contact</h2>
            <p>For questions about data protection please contact: <a href="mailto:hello@lumaia.ai" className="text-accent/70 hover:text-accent transition-colors">hello@lumaia.ai</a></p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
