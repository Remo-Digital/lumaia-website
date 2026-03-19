'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/LanguageContext'

export default function ContactPage() {
  const { t } = useLanguage()
  const c = t.contact
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-28 pb-20 px-6"
        style={{ background: 'linear-gradient(135deg, #03020a 0%, #0d0822 45%, #04021a 100%)' }}>
        <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up-1">
            <span className="glass-accent text-accent text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full">
              {c.label}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl mt-6 mb-4">
              {c.title} <em className="gradient-text not-italic">{c.title_em}</em>
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto">{c.sub}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-up-2">
            {/* Info cards */}
            <div className="flex flex-col gap-4">
              {[
                { label: c.info.email_label, value: c.info.email_value },
                { label: c.info.location_label, value: c.info.location_value },
                { label: c.info.response_label, value: c.info.response_value },
              ].map(({ label, value }) => (
                <div key={label} className="glass rounded-2xl p-5 glow-hover">
                  <p className="text-white/30 text-xs font-semibold tracking-[0.15em] uppercase mb-1">{label}</p>
                  <p className="text-white/80 text-sm">{value}</p>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="md:col-span-2 glass rounded-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full gap-3 py-12 text-center">
                  <span className="text-4xl">✓</span>
                  <h2 className="font-serif text-2xl gradient-text">{c.form.success_title}</h2>
                  <p className="text-white/40 text-sm">{c.form.success_sub}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      required
                      type="text"
                      placeholder={c.form.name}
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="bg-white/05 border border-white/08 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-accent/40 transition-colors"
                    />
                    <input
                      required
                      type="email"
                      placeholder={c.form.email}
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="bg-white/05 border border-white/08 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-accent/40 transition-colors"
                    />
                  </div>
                  <input
                    required
                    type="text"
                    placeholder={c.form.subject}
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    className="bg-white/05 border border-white/08 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-accent/40 transition-colors"
                  />
                  <textarea
                    required
                    rows={5}
                    placeholder={c.form.message}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="bg-white/05 border border-white/08 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-accent/40 transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="glass-accent text-accent font-semibold text-sm px-6 py-3 rounded-xl tracking-wide transition-all duration-200 hover:bg-accent/10 text-left">
                    {c.form.submit}
                  </button>
                  <p className="text-white/20 text-xs">{c.form.privacy}</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
