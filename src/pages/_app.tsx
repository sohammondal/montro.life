import { DefaultSeo, NextSeo } from 'next-seo'
import type { AppProps as NextAppProps } from 'next/app'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import { config } from 'config'
import { AppProvider, useAppContext } from 'context'
import { defaultSeoConfig } from 'data'
import { OrientationError } from 'sections'
import { GoogleAnalytics, GoogleTM, Hotjar } from 'sections/Analytics'
import { GlobalStyles } from 'theme'
import { PageDataProps } from 'types'

import 'notyf/notyf.min.css'
import 'react-loading-skeleton/dist/skeleton.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AppProps<P = any> = {
  pageProps: P
} & Omit<NextAppProps<P>, 'pageProps'>

function MyApp(props: AppProps<PageDataProps>) {
  const { pageProps, ...restProps } = props
  const { ...restPageProps } = pageProps
  const appProviderProps = {}

  return (
    <>
      <GoogleAnalytics />
      <GoogleTM />
      <Hotjar />
      <AppProvider {...appProviderProps}>
        <DefaultSeo {...defaultSeoConfig} />
        <MyComponent {...restProps} pageProps={restPageProps} />
      </AppProvider>
    </>
  )
}

function MyComponent({ Component, pageProps }: AppProps) {
  const { theme } = useAppContext()

  return (
    <>
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${config.GTM_CODE}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}
      {pageProps.seo && <NextSeo {...pageProps.seo} />}
      <ThemeProvider theme={theme || ({} as DefaultTheme)}>
        <GlobalStyles />
        <OrientationError />
        <main id="app">
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  )
}

export default MyApp
