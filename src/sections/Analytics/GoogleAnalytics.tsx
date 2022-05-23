import Script from 'next/script'
import React from 'react'

import { config } from 'config'
import { isProduction } from 'helpers'

export const GoogleAnalytics = () => {
  if (isProduction)
    return (
      <>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${config.GA_CODE}`}
        />
        <Script strategy="afterInteractive" id="gtag-init">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', ${config.GA_CODE});
        `}
        </Script>
      </>
    )

  return null
}
