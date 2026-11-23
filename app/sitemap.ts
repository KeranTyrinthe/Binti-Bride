import type { MetadataRoute } from 'next'
import { canonicalUrl } from '@/lib/site-seo'
import { indexablePaths } from '@/lib/site-routes'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return indexablePaths.map((path) => ({ url: canonicalUrl(path) }))
}
