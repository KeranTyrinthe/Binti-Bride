import type { Metadata } from 'next'
import { city, contact, media, siteDescription, siteName } from '@/lib/site-data'
import { basePath } from '@/lib/site-path'
import { getPageDetails, paths } from '@/lib/site-routes'

function readSiteUrl() {
  const value = process.env.SITE_URL?.trim()
  if (!value) return undefined

  const url = new URL(value)
  if (!['http:', 'https:'].includes(url.protocol) || url.search || url.hash || url.username || url.password) {
    throw new Error('SITE_URL doit être une URL publique HTTP(S) sans paramètres ni fragment.')
  }
  url.pathname = url.pathname.replace(/\/*$/, '/')
  return url
}

export const siteUrl = readSiteUrl()

function absoluteUrl(path: string) {
  if (!siteUrl) return undefined
  const relative = basePath && path.startsWith(`${basePath}/`) ? path.slice(basePath.length) : path
  return new URL(relative.replace(/^\/+/, ''), siteUrl).href
}

export function canonicalUrl(path: string) {
  return absoluteUrl(`${path.replace(/\/+$/, '')}/`)
}

export function pageMetadata(path: string): Metadata {
  const page = getPageDetails(path)
  if (!page) return {}

  const title = path === paths.home ? `${siteName} – ${page.title}` : `${page.title} | ${siteName}`
  const url = canonicalUrl(path)
  const imageUrl = absoluteUrl(page.image)
  const images = imageUrl ? [{ url: imageUrl, alt: page.title }] : undefined
  return {
    title,
    description: page.description,
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      type: page.kind === 'article' ? 'article' : 'website',
      title,
      description: page.description,
      url,
      siteName,
      locale: 'fr_CD',
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: page.description,
      images,
    },
  }
}

export function pageStructuredData(path: string) {
  const page = getPageDetails(path)
  const url = canonicalUrl(path)
  const homeUrl = canonicalUrl(paths.home)
  if (!page || !url || !homeUrl) return []
  const businessId = `${homeUrl}#binti-bride`
  const websiteId = `${homeUrl}#site`

  if (path === paths.home) {
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': businessId,
        name: siteName,
        description: siteDescription,
        url: homeUrl,
        image: absoluteUrl(media.hero),
        logo: absoluteUrl(media.logo),
        telephone: contact.phone,
        email: contact.email,
        address: { '@type': 'PostalAddress', addressLocality: city, addressCountry: 'CD' },
        openingHoursSpecification: contact.hours.filter(({ opens }) => opens).map(({ schemaDay, opens, closes }) => ({
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: `https://schema.org/${schemaDay}`,
          opens,
          closes,
        })),
        areaServed: { '@type': 'City', name: city },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': websiteId,
        name: siteName,
        url: homeUrl,
        inLanguage: 'fr-CD',
        publisher: { '@id': businessId },
      },
    ]
  }

  const parents = page.parent ? [{ name: getPageDetails(page.parent)?.title, item: canonicalUrl(page.parent) }] : []
  const crumbs = [
    { name: 'Accueil', item: homeUrl },
    ...parents,
    { name: page.title, item: url },
  ]
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({ '@type': 'ListItem', position: index + 1, ...crumb })),
  }

  if (page.kind !== 'article') return [breadcrumb]
  return [
    breadcrumb,
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: page.title,
      description: page.description,
      image: absoluteUrl(page.image),
      url,
      mainEntityOfPage: url,
      inLanguage: 'fr-CD',
      author: { '@type': 'Organization', '@id': businessId, name: siteName, url: homeUrl },
      publisher: { '@id': businessId },
      isPartOf: { '@id': websiteId },
    },
  ]
}
