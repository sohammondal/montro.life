import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'

import { config } from 'config'
import { fontSetup } from 'theme/global.styles'

const fonts = [
  'Afterglow-Regular.woff2',
  'elliana-samantha.woff2',
  'Poppins-Regular.woff2',
]

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="preconnect"
            href={config.ASSETS_URL}
            crossOrigin="anonymous"
          />
          {fonts.map((font) => (
            <link
              key={font}
              rel="preload"
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
              href={`/fonts/${font}`}
            />
          ))}
          <style>{fontSetup}</style>
          <link rel="preload" as="image" href="/images/yoga-pose-hero.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
