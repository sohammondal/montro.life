/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: false,
  env: {
    ENV: process.env.ENV,
    HOST: process.env.HOST,
    API_BASE_URL: process.env.API_BASE_URL,
    GA_CODE: process.env.GA_CODE,
    HJID: process.env.HJID,
    GTM_CODE: process.env.GTM_CODE,
  },
  images: {
    domains: [],
  },
  webpack: (config) => {
    // Important: return the modified config
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })
    return config
  },
}

module.exports = nextConfig
