'use client'

import { useEffect, useRef, useState } from 'react'

export function Reveal({ children, className = '', delay = 0, effect = 'rise', replay = false, style }: {
  children: React.ReactNode
  className?: string
  delay?: number
  effect?: 'rise' | 'left' | 'right' | 'wipe'
  replay?: boolean
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      element.classList.add('revealed')
      return
    }

    document.documentElement.classList.add('motion-ready')

    const inset = Math.min(110, Math.round(window.innerHeight * 0.105))
    const observer = new IntersectionObserver(([entry]) => {
      element.classList.toggle('revealed', entry.isIntersecting)
      if (entry.isIntersecting && !replay) observer.disconnect()
    }, { rootMargin: `0px 0px -${inset}px` })
    observer.observe(element)
    return () => observer.disconnect()
  }, [replay])

  return <div ref={ref} className={`reveal ${className}`} data-reveal={effect} style={{ ...style, '--reveal-delay': `${delay}ms` } as React.CSSProperties}>{children}</div>
}

const commitments = [
  ['Choisir des robes qui mettent en valeur votre style et dans lesquelles vous vous sentez à l’aise.', 'ÉLÉGANCE'],
  ['Prendre le temps de comprendre vos envies, votre morphologie et votre budget avant de vous conseiller.', 'ÉCOUTE'],
  ['Rechercher la qualité dans les robes, les collaborations et l’accompagnement que nous souhaitons vous proposer.', 'EXCELLENCE'],
]

export function CommitmentCarousel() {
  const ref = useRef<HTMLDivElement>(null)
  const [{ index, direction }, setSlide] = useState({ index: 0, direction: 1 })
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)

  function move(direction: number) {
    setSlide(current => ({ index: (current.index + direction + commitments.length) % commitments.length, direction }))
  }

  useEffect(() => {
    const element = ref.current
    if (!element || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.25 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible || hovered || focused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setTimeout(() => move(1), 7000)
    return () => window.clearTimeout(timer)
  }, [visible, hovered, focused, index])

  return (
    <div className="review-panel" ref={ref} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocus={() => setFocused(true)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false) }}>
      <button className="review-arrow review-prev" type="button" aria-label="Engagement précédent" onClick={() => move(-1)}>‹</button>
      <div className="review-message" aria-live={focused || hovered ? 'polite' : 'off'}>
        <span className="quote-mark" aria-hidden="true">”</span>
        <div key={index} className="review-copy" data-direction={direction}>
          <blockquote>{commitments[index][0]}</blockquote>
          <p className="review-by">— {commitments[index][1]}</p>
        </div>
      </div>
      <button className="review-arrow review-next" type="button" aria-label="Engagement suivant" onClick={() => move(1)}>›</button>
    </div>
  )
}

export function WeddingFilm({ poster, src }: { poster: string; src: string }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])

  return <>
    <button className="film-preview" type="button" onClick={() => setOpen(true)} aria-label="Lire la vidéo de couture nuptiale">
      <img loading="lazy" decoding="async" src={poster} alt="Détail de couture sur une robe de mariée" /><span className="film-play" aria-hidden="true">▶</span><span className="film-label">Lire la vidéo</span>
    </button>
    {open && <div className="film-modal" role="dialog" aria-modal="true" aria-label="Vidéo de couture nuptiale" onClick={() => setOpen(false)}><button className="film-close" type="button" aria-label="Fermer la vidéo" onClick={() => setOpen(false)}>×</button><video controls autoPlay playsInline src={src} onClick={event => event.stopPropagation()} /></div>}
  </>
}
