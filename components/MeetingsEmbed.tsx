'use client'
import { useEffect } from 'react'

export default function MeetingsEmbed() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js'
    script.type = 'text/javascript'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section className="relative py-20 px-6" style={{ background: 'linear-gradient(135deg, #03020a 0%, #0d0822 45%, #04021a 100%)' }}>
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto">
        <div
          className="meetings-iframe-container"
          data-src="https://dewave.iundf.com/meetings/remo-girard/lumaia-demo?embed=true"
        />
      </div>
    </section>
  )
}
