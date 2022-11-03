/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['edmullen.net', 'effigis.com'],
  },
}

module.exports = nextConfig
