/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: false,
  env: {
    ENV: process.env.ENV,
    HOST: process.env.HOST,
  },
  images: {
    domains: [],
  },
  webpack: (config) => {
    // config.module.rules.push({
    //   test: /\.(png|jpg|jpeg|gif)$/i,
    //   use: [
    //     {
    //       loader: 'url-loader',
    //       options: {
    //         limit: false,
    //       },
    //     },
    //   ],
    // })

    config.module.rules.push({
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      loader: require.resolve('url-loader'),
    })

    return config

    return config
  },
}

module.exports = nextConfig
