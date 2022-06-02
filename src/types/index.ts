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

export interface Data<T> {
  id: number
  attributes: T
}

export interface Attendance {
  createdAt: Date
  timestamp: Date
  type: string
  comments: string
  updatedAt: Date
  publishedAt: Date
  trainer: {
    data: Data<UserInfo>
  }
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export interface StrapiGETAllResp<T> {
  data: Data<T>[]
  meta: {
    pagination: Pagination
  }
}
