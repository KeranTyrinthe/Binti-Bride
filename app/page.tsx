import HomePage from '@/components/home-page'
import { PageStructuredData } from '@/components/page-structured-data'
import { paths } from '@/lib/site-routes'
import { pageMetadata } from '@/lib/site-seo'

export const metadata = pageMetadata(paths.home)

export default function Page() {
  return <><PageStructuredData path={paths.home} /><HomePage /></>
}
