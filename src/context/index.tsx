import React, {
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import { DefaultTheme } from 'styled-components'

import { getUserFromCookies } from 'helpers/user'
import { theme, Themes } from 'theme'
import { PageDataProps, UserInfo } from 'types'

export interface IAppContext extends PageDataProps {
  theme?: DefaultTheme
  isDark?: boolean
  toggleTheme?: () => void
  user: UserInfo | null
  setUser: Dispatch<SetStateAction<UserInfo | null>>
}

export const AppContext: React.Context<IAppContext> = createContext(
  {} as IAppContext
)

export const useAppContext = (): IAppContext => useContext(AppContext)

export const AppProvider: React.FC = ({ children }) => {
  const [isDark, setIsDark] = useState(false)
  const toggleTheme = () => {
    setIsDark(!isDark)
  }
  const [user, setUser] = useState<UserInfo | null>(
    getUserFromCookies() || ({} as UserInfo)
  )

  useEffect(() => {
    // kick off the polyfill!
    window && smoothscroll.polyfill()
  }, [])

  return (
    <AppContext.Provider
      value={{
        theme: { ...theme, mode: isDark ? Themes.DARK : Themes.LIGHT },
        isDark,
        toggleTheme,
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
