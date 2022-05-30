/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: false,
  env: {
    ENV: process.env.ENV,
    HOST: process.env.HOST,
    API_BASE_I: process.env.API_BASE_I,
    API_BASE_II: process.env.API_BASE_II,
    GA_CODE: process.env.GA_CODE,
    HJID: process.env.HJID,
    GTM_CODE: process.env.GTM_CODE,
  },
  images: {
    domains: [],
  },
}

module.exports = nextConfig
