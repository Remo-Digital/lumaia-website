'use client'
import { useRef, useState } from 'react'

export default function VideoPlayer({ src, label = 'Video' }: { src: string; label?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [showControls, setShowControls] = useState(false)

  function togglePlay() {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  function toggleMute() {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  return (
    <div
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        playsInline
        loop
        className="w-full block"
        aria-label={label}
        onEnded={() => setPlaying(false)}
      />

      {/* Centre play/pause overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
        style={{ opacity: !playing || showControls ? 1 : 0 }}
      >
        <button
          onClick={(e) => { e.stopPropagation(); togglePlay() }}
          aria-label={playing ? 'Pause' : 'Play'}
          className="flex items-center justify-center w-20 h-20 rounded-full transition-all duration-200"
          style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)', border: '1.5px solid rgba(255,255,255,0.2)' }}
        >
          {playing ? (
            /* Pause icon */
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="5" y="4" width="4" height="16" rx="1.5" fill="white" />
              <rect x="15" y="4" width="4" height="16" rx="1.5" fill="white" />
            </svg>
          ) : (
            /* Play icon */
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 4l14 8-14 8V4z" fill="white" />
            </svg>
          )}
        </button>
      </div>

      {/* Mute button — bottom right */}
      <div
        className="absolute bottom-4 right-4 transition-opacity duration-300"
        style={{ opacity: !playing || showControls ? 1 : 0 }}
      >
        <button
          onClick={(e) => { e.stopPropagation(); toggleMute() }}
          aria-label={muted ? 'Ton einschalten' : 'Ton ausschalten'}
          className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200"
          style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)', border: '1.5px solid rgba(255,255,255,0.2)' }}
        >
          {muted ? (
            /* Muted icon */
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M11 5L6 9H2v6h4l5 4V5z" fill="white" />
              <path d="M23 9l-6 6M17 9l6 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            /* Sound on icon */
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M11 5L6 9H2v6h4l5 4V5z" fill="white" />
              <path d="M15.5 8.5a5 5 0 010 7" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M19 5.5a9 9 0 010 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}
