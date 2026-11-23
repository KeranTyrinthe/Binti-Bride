'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Reveal } from '@/components/site-interactions'
import { contact, getAppointmentUrl, media } from '@/lib/site-data'
import { paths } from '@/lib/site-routes'

const navItems = [
  ['À propos', paths.about],
  ['Services', paths.services],
  ['Inspirations', paths.inspirations],
  ['Conseils', paths.blog],
]

export function SiteHeader({ home = false }: { home?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  return (
    <header className={`site-header${home ? ' site-header-home' : ''}${scrolled ? ' site-header-scrolled' : ''}`}>
      <Link href="/" className="site-logo" aria-label="Accueil de BINTI Bride"><img src={media.logo} alt="BINTI Bride" /></Link>
      <nav className="desktop-nav" aria-label="Navigation principale">
        {navItems.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
      </nav>
      <a className="header-story" href={getAppointmentUrl()}><span aria-hidden="true">↗</span> Prendre rendez-vous</a>
      <button className={`menu-button${menuOpen ? ' menu-button-open' : ''}`} type="button" aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(value => !value)}><span /><span /></button>
      <nav id="mobile-navigation" className={`menu-panel${menuOpen ? ' menu-panel-open' : ''}`} aria-label="Navigation mobile" aria-hidden={!menuOpen}>
        {navItems.map(([label, href], index) => <Link href={href} onClick={() => setMenuOpen(false)} key={href} style={{ '--menu-index': index } as React.CSSProperties}>{label}</Link>)}
        <a className="menu-contact" href={getAppointmentUrl()} onClick={() => setMenuOpen(false)}>Prendre rendez-vous <span aria-hidden="true">↗</span></a>
        <Link className="menu-gallery" href={paths.gallery} onClick={() => setMenuOpen(false)}>Voir la galerie</Link>
      </nav>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Reveal className="footer-top">
        <div className="footer-brand"><Link href="/"><img src={media.logo} alt="BINTI Bride" /></Link><p>Robes de mariée et accompagnement à Lubumbashi.</p></div>
        <div className="footer-column"><span className="eyebrow">Navigation</span><Link href="/">Accueil</Link><Link href={paths.services}>Services</Link><Link href={paths.inspirations}>Inspirations</Link><Link href={paths.gallery}>Galerie</Link><Link href={paths.about}>À propos</Link></div>
        <div className="footer-column"><span className="eyebrow">Infos pratiques</span><Link href={`${paths.contact}/#rendez-vous`}>Contact et horaires</Link><Link href={paths.blog}>Conseils</Link><Link href={paths.privacy}>Confidentialité</Link><Link href={paths.terms}>Conditions d’utilisation</Link></div>
        <div className="footer-column footer-contact"><span className="eyebrow">Contact</span><a href={`mailto:${contact.email}`}>{contact.email}</a><a href={`tel:${contact.phone}`}>{contact.phoneLabel}</a><span>{contact.location}</span></div>
      </Reveal>
      <Reveal className="footer-gallery" effect="wipe" delay={150}><img src={media.storyThumbs[0]} alt="Détail d’une robe en dentelle" /><img src={media.collage[2]} alt="Une mariée sous un voile lumineux" /><img src={media.storyThumbs[2]} alt="Robe de mariée sur un cintre" /><img src={media.contact} alt="Portrait de mariée sous son voile" /><span>BINTI BRIDE</span></Reveal>
      <Reveal className="footer-bottom" delay={180}><span>BINTI Bride · Lubumbashi</span><div><Link href={paths.privacy}>Confidentialité</Link><Link href={paths.terms}>Conditions</Link><a href="#top" className="back-top">Haut de page ↑</a></div></Reveal>
    </footer>
  )
}
