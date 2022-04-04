import type { NextPage } from 'next'

import {
  Hero,
  Header,
  KnowAboutYoga,
  Testimonials,
  Trainers,
  Timings,
} from 'sections'

const sections = [Header, Hero, KnowAboutYoga, Testimonials, Trainers, Timings]

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
