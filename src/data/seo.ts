import { config } from 'constant'
import { NextSeoProps } from 'types'

export const defaultSeoConfig: NextSeoProps = {
  additionalLinkTags: [{ rel: 'icon', href: '/favicon.ico' }],
  additionalMetaTags: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'keywords',
      content:
        'montro, life, fitness, yoga, meditation, flexibility, asana, breathing, yog',
    },
  ],
  titleTemplate: '%s | Montro Health & Wellness',
  defaultTitle: 'Montro Health & Wellness',
  description: 'Montro Health & Wellness',
  canonical: config.HOST,
  openGraph: {
    type: 'website',
    url: config.HOST,
    site_name: 'Montro Health & Wellness',
    locale: 'en_IE',
    images: [
      {
        url: '/images/logo512.png',
        width: 800,
        height: 600,
        alt: 'Openhouse Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
}

export const staticPageSEOConfig = {
  privacyPolicy: { title: 'Privacy Policy' },
  aboutUs: { title: 'About Us' },
  termsAndConditions: { title: 'Terms & Conditions' },
  refundAndReturn: { title: 'Refund & Return Policy' },
}
