const staticExport = process.env.BINTI_STATIC_EXPORT === '1'

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
  trailingSlash: true,
  images: { unoptimized: true },
}

if (staticExport) nextConfig.output = 'export'
else nextConfig.headers = async () => [{
  source: '/:path*',
  headers: [
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    { key: 'Content-Security-Policy-Report-Only', value: "default-src 'self'; img-src 'self' data:; media-src 'self'; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self' 'unsafe-inline' 'unsafe-eval'; connect-src 'self' https://vitals.vercel-insights.com; object-src 'none'; base-uri 'self'" },
  ],
}]

export default nextConfig
