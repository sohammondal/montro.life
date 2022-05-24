import { NextSeoProps } from 'next-seo'

export type { NextSeoProps }

export interface PaginatedResponse<T> {
  count: number
  next: string
  prev: string
  results: T[]
}

export interface UserInfo {
  ip: string
  city: string
  region: string
  country: string
  loc: string
  org: string
  postal: string
  timezone: string
}

export interface PageDataProps {
  seo?: NextSeoProps
}

export interface ImageProps {
  blurDataURL: string
  src: string
  type: string
  height: number
  width: number
}
export interface IOuterContainer {
  bgColor?: 'primary' | 'secondary'
  images?: {
    [x: string]: {
      blurDataURL: string
      src: string
      height: number
      width: number
      type?: string | undefined
    }
  }
}
