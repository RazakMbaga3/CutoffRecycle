/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
    minimumCacheTTL: 60,
  },
  experimental: {
    optimizeCss: {
      enabled: true,
      cssModules: true,
      // Add specific options for critters
      critters: {
        preload: 'media',
        pruneSource: true,
        reduceInlineStyles: true,
      },
    },
    optimizePackageImports: ['framer-motion', 'react-icons'],
  },
  // Add general performance optimizations
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
}

export default nextConfig
