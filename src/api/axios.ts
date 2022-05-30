import axios, { AxiosRequestConfig } from 'axios'
import qs from 'qs'

import { getJWTFromCookies } from 'helpers/user'

const heroku = axios.create({
  baseURL: `${process.env.API_BASE_II}/api`,
})

heroku.interceptors.request.use((config) => {
  const jwt = getJWTFromCookies()
  if (jwt) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${jwt}`,
    }
  }
  return config
})

export const authCallback = (provider = '', query: Record<string, unknown>) =>
  heroku.get(`/auth/${provider}/callback?${qs.stringify(query)}`)

export const getUser = async (
  userId = 'me',
  query: Record<string, unknown>,
  config: AxiosRequestConfig
) => heroku.get(`/users/${userId}?${qs.stringify(query)}`, config)

export const updateUser = (
  userId = '',
  query: Record<string, unknown>,
  payload: Record<string, unknown>
) => heroku.put(`/users/${userId}?${qs.stringify(query)}`, payload)
