import type { NextPage, InferGetStaticPropsType } from 'next'

import { sectionIds } from 'constant'
import {
  Hero,
  Header,
  KnowAboutYoga,
  Testimonials,
  AboutAindrilla,
  Footer,
} from 'sections'

const sections = [
  Header,
  Hero,
  KnowAboutYoga,
  Testimonials,
  AboutAindrilla,
  Footer,
]

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  images,
}) => {
  return (
    <>
      {sections.map((Section, idx) => (
        <Section key={`home-section-${idx}`} images={images} />
      ))}
    </>
  )
}

export const getStaticProps = async () => {
  const { getPlaiceholder } = await import('plaiceholder')
  const [hero, aboutYoga, aboutAindrilla] = await Promise.all([
    await getPlaiceholder('/images/yoga-pose-hero.png', { size: 4 }),
    await getPlaiceholder('/images/yoga-pose-3.png'),
    await getPlaiceholder('/images/aindrilla.png'),
  ])

  return {
    props: {
      images: {
        [sectionIds.hero]: {
          ...hero.img,
          blurDataURL: hero.base64,
        },
        [sectionIds.aboutYoga]: {
          ...aboutYoga.img,
          blurDataURL: aboutYoga.base64,
        },
        [sectionIds.aboutAindrilla]: {
          ...aboutAindrilla.img,
          blurDataURL: aboutAindrilla.base64,
        },
      },
    },
  }
}

export default Home
