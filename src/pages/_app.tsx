import { DefaultSeo, NextSeo } from 'next-seo'
import type { AppProps as NextAppProps } from 'next/app'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import { Loader } from 'components/Loader'
import { ModalProvider, BaseModalBackground } from 'components/Modal'
import { config } from 'config'
import { AppProvider, useAppContext } from 'context'
import { defaultSeoConfig } from 'data'
import { useRouteChangeTracker } from 'hooks/useRouteChangeTracker'
import { OrientationError } from 'sections'
import { GoogleAnalytics, GoogleTM, Hotjar } from 'sections/Analytics'
import { GlobalStyles } from 'theme'
import { PageDataProps } from 'types'

import 'notyf/notyf.min.css'
import 'react-loading-skeleton/dist/skeleton.css'
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AppProps<P = any> = {
  pageProps: P
} & Omit<NextAppProps<P>, 'pageProps'>

function MyApp(props: AppProps<PageDataProps>) {
  const { pageProps, ...restProps } = props
  const { ...restPageProps } = pageProps

  return (
    <>
      <GoogleAnalytics />
      <GoogleTM />
      <Hotjar />
      <AppProvider>
        <ModalProvider backgroundComponent={BaseModalBackground}>
          <DefaultSeo {...defaultSeoConfig} />
          <MyComponent {...restProps} pageProps={restPageProps} />
        </ModalProvider>
      </AppProvider>
    </>
  )
}

function MyComponent({ Component, pageProps }: AppProps) {
  const { theme } = useAppContext()
  const { isRouteChanging } = useRouteChangeTracker()

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
        <Loader isOpen={isRouteChanging} />
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
