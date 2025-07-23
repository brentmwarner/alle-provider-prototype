/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Turbopack optimizations (now stable)
  turbopack: {
    resolveAlias: {
      '@': './src',
    },
  },
}

module.exports = nextConfig