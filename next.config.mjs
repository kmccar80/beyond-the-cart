/** @type {import('next').NextConfig} */
const figmaPublicUrl = process.env.FIGMA_PUBLIC_URL
const allowedDevOrigins =
  process.env.FIGMA && figmaPublicUrl
    ? [new URL(figmaPublicUrl).hostname]
    : undefined

const nextConfig = {
  ...(allowedDevOrigins ? { allowedDevOrigins } : {}),
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
