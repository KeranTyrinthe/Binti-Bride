import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteFooter, SiteHeader } from '@/components/site-chrome'
import { PageIntro } from '@/components/site-pages'

export const metadata: Metadata = { title: 'Page introuvable | BINTI Bride', robots: { index: false, follow: true } }

export default function NotFound() {
  return <>
    <SiteHeader />
    <main className="inner-page">
      <PageIntro eyebrow="BINTI Bride" title={<>PAGE<br />INTROUVABLE</>} />
      <div className="story-back"><Link href="/" className="text-link">← Retour à l’accueil</Link></div>
    </main>
    <SiteFooter />
  </>
}
