import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { media, siteName } from '@/lib/site-data'
import { siteUrl } from '@/lib/site-seo'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: siteName,
  robots: { index: true, follow: true, googleBot: { 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  icons: { icon: media.favicon, apple: media.favicon },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr-CD">
      <body className="antialiased" id="top">
        {children}
        {process.env.VERCEL === '1' && <Analytics />}
      </body>
    </html>
  )
}
