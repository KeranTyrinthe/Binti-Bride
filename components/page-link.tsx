'use client'

import Link from 'next/link'
import type { ComponentProps } from 'react'
import { publicPath } from '@/lib/site-path'

type PageLinkProps = Omit<ComponentProps<typeof Link>, 'href' | 'onNavigate' | 'scroll'> & { href: string }

export function PageLink({ href, ...props }: PageLinkProps) {
  const hasAnchor = href.includes('#')

  return <Link
    {...props}
    href={href}
    scroll={hasAnchor}
    onNavigate={() => {
      if (hasAnchor) return
      const destination = new URL(publicPath(href), window.location.origin)
      const path = (value: string) => value.replace(/\/+$/, '')
      if (path(destination.pathname) === path(window.location.pathname) && destination.search === window.location.search) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      }
    }}
  />
}
