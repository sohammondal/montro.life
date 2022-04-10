import { Errors, config } from 'constant'

export * from './window'
export * from './name'
export * from './seo'

export { default as isValidMobileNumber } from 'validator/lib/isMobilePhone'
export { default as isValidEmail } from 'validator/lib/isEmail'

export const isDevelopment = config.ENV?.toLowerCase() === 'development'
export const isStaging = config.ENV?.toLowerCase() === 'staging'
export const isBeta = config.ENV?.toLowerCase() === 'beta'
export const isProduction = config.ENV?.toLowerCase() === 'production'

export type ExtractStringPropertyNames<T> = {
  [K in keyof T]: T[K] extends string ? K : never
}[keyof T]

export const getErrorFromCode = (code: number | string) => Errors[String(code)]
