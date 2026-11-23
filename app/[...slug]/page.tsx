import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound, permanentRedirect } from 'next/navigation'
import { PageStructuredData } from '@/components/page-structured-data'
import { PageIntro, SitePage } from '@/components/site-pages'
import { publicPath } from '@/lib/site-path'
import { getPageDetails, getRedirect, indexablePaths, legacyPaths, paths } from '@/lib/site-routes'
import { canonicalUrl, pageMetadata } from '@/lib/site-seo'

type RouteProps = { params: Promise<{ slug: string[] }> }

export const dynamicParams = false

export function generateStaticParams() {
  return [...indexablePaths, ...legacyPaths].filter((path) => path !== paths.home)
    .map((path) => ({ slug: path.slice(1).split('/') }))
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params
  const path = `/${slug.join('/')}`
  const target = getRedirect(path)
  if (target) return {
    title: 'Page déplacée | BINTI Bride',
    alternates: { canonical: canonicalUrl(target) },
    robots: { index: false, follow: true },
  }
  return pageMetadata(path)
}

export default async function InteriorRoute({ params }: RouteProps) {
  const { slug } = await params
  const path = `/${slug.join('/')}`
  const target = getRedirect(path)

  if (target) {
    if (process.env.BINTI_STATIC_EXPORT !== '1') permanentRedirect(publicPath(target))
    return <main className="inner-page">
      <meta httpEquiv="refresh" content={`0; url=${publicPath(target)}/`} />
      <PageIntro eyebrow="BINTI Bride" title="PAGE DÉPLACÉE" />
      <div className="story-back"><Link href={target} className="text-link">Accéder à la page ↗</Link></div>
    </main>
  }

  if (!getPageDetails(path)) notFound()
  return <><PageStructuredData path={path} /><SitePage path={path} /></>
}
