import { pageStructuredData } from '@/lib/site-seo'

export function PageStructuredData({ path }: { path: string }) {
  const data = pageStructuredData(path)
  return data.map((entry) => (
    <script
      key={entry['@type']}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(entry).replace(/</g, '\u003c') }}
    />
  ))
}
