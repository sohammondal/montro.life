export * from './Errors'
export * from './images'
export * from './sections'

export const config = {
  ENV: process.env.ENV,
  HOST: process.env.HOST,
  ASSETS_URL: process.env.ASSETS_URL,
  IP_INFO_TOKEN: process.env.IP_INFO_TOKEN,
  NODE_ENV: process.env.NODE_ENV,
  HJID: process.env.HJID,
  HJSV: process.env.HJSV,
  NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
}
