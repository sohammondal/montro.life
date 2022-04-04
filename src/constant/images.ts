export const STANDARD_IMG_BASE =
  'https://res.cloudinary.com/openhouse-study/image/upload/v1646649085/oh-website-v2/standard-groups'

export const S3_IMG_BASE = `${process.env.ASSETS_URL}/oh-website`

export const HERO_IMAGE_BASE = S3_IMG_BASE + '/hero'

export const heroImages = {
  home: HERO_IMAGE_BASE + '/homepage-hero.mp4',
  aboutUs: HERO_IMAGE_BASE + '/about-hero.png',
  clubs: {
    tablet: HERO_IMAGE_BASE + '/clubs-hero.png',
    mobile: HERO_IMAGE_BASE + '/clubs-hero-mobile.svg',
  },
}
