'use client'

import { usePathname } from 'next/navigation'
import { useLayoutEffect, useRef } from 'react'

export function PageNavigation() {
  const pathname = usePathname()
  const previousPath = useRef(pathname)
  const historyDestination = useRef<string | null>(null)

  useLayoutEffect(() => {
    const rememberHistoryDestination = () => { historyDestination.current = window.location.href }
    window.addEventListener('popstate', rememberHistoryDestination, true)
    return () => window.removeEventListener('popstate', rememberHistoryDestination, true)
  }, [])

  useLayoutEffect(() => {
    if (pathname === previousPath.current) return
    previousPath.current = pathname

    const isHistoryNavigation = historyDestination.current === window.location.href
    historyDestination.current = null
    if (isHistoryNavigation || window.location.hash) return

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
