import jwtDecode from 'jwt-decode'
import { parseCookies } from 'nookies'

export const getUserFromCookies = () => {
  const cookies = parseCookies()
  return JSON.parse(cookies.user || '{}')
}

export const getJWTFromCookies = () => {
  const cookies = parseCookies()
  return cookies.jwt
}

export const defaultCookieOptions = (jwt?: string) => {
  const defaultDecodedJwt = { exp: 0, iat: 0 }

  const token = jwt || getJWTFromCookies()

  if (!token)
    return {
      path: '/',
    }

  const decodedJwt = token
    ? (jwtDecode(token) as typeof defaultDecodedJwt)
    : defaultDecodedJwt
  return {
    path: '/',
    expires: new Date(decodedJwt.exp * 1000),
  }
}
