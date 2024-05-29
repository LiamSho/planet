/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,

  images: {
    remotePatterns: [
      {
        hostname: '**',
        protocol: 'https',
      },
    ],
    dangerouslyAllowSVG: true,
  },
  experimental: {
    reactCompiler: true,
    webpackBuildWorker: true,
  },
}

export default nextConfig
