import { NextSeoProps } from 'next-seo'
import { CSSProp } from 'styled-components'

export type { NextSeoProps }

export interface PaginatedResponse<T> {
  count: number
  next: string
  prev: string
  results: T[]
}

export interface Role {
  id: number
  name: string
  description: string
  type: 'trainer' | 'client'
  createdAt: Date
  updatedAt: Date
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
  id: number
  name: string
  phone: string
  username: string
  email: string
  provider: string
  confirmed: boolean
  blocked: boolean
  createdAt: Date
  updatedAt: Date
  role: Role
}

export interface PageDataProps {
  seo?: NextSeoProps
}

export interface IOuterContainer {
  bgColor?: 'primary' | 'secondary'
  divider?: boolean
  innerStyles?: CSSProp
  outerStyles?: CSSProp
  dividerStyles?: CSSProp
  id?: string
}
