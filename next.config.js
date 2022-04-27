/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: false,
  env: {
    ENV: process.env.ENV,
    HOST: process.env.HOST,
    API_BASE_URL: process.env.API_BASE_URL,
  },
  images: {
    domains: [],
  },
}

module.exports = nextConfig
