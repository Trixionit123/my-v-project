/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'standalone'
}

export default nextConfig
