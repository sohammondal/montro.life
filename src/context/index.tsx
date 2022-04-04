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

import { theme, Themes } from 'theme'
import { PageDataProps, UserInfo } from 'types'

export interface IAppContext extends PageDataProps {
  theme?: DefaultTheme
  isDark?: boolean
  toggleTheme?: () => void
  userInfo?: UserInfo
  setUserInfo?: Dispatch<SetStateAction<UserInfo>>
}

export const AppContext: React.Context<IAppContext> = createContext(
  {} as IAppContext
)

export const useAppContext = (): IAppContext => useContext(AppContext)

export const AppProvider: React.FC<IAppContext> = ({ children, ...props }) => {
  const [isDark, setIsDark] = useState(false)
  const toggleTheme = () => {
    setIsDark(!isDark)
  }
  const [userInfo, setUserInfo] = useState({} as UserInfo)

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
        userInfo,
        setUserInfo,
        ...props,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
