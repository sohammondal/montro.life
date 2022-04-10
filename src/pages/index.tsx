import type { NextPage } from 'next'

import {
  Hero,
  Header,
  KnowAboutYoga,
  Testimonials,
  Trainers,
  Footer,
} from 'sections'

const sections = [Header, Hero, KnowAboutYoga, Testimonials, Trainers, Footer]

const Home: NextPage = ({}) => {
  return (
    <>
      {sections.map((Section, idx) => (
        <Section key={`home-section-${idx}`} />
      ))}
    </>
  )
}

export default Home
