import NextImage from 'next/image'
import React from 'react'

import { Body, Container, H1, H4 } from 'components'
import { sectionIds } from 'constant'

import { containerStyles, ContentBox, MediaBox, Skill, Skills } from './styles'

const skills = [
  'Customized Yoga Journey',
  'Weight Loss Plan',
  'Deep Relaxation',
  'Meditation',
]

export const AboutAindrilla = () => {
  return (
    <Container {...containerStyles} id={sectionIds.aboutAindrilla}>
      <MediaBox>
        <NextImage
          src={`/images/aindrilla.png`}
          layout="intrinsic"
          width={450}
          height={450}
          objectFit="contain"
        />
      </MediaBox>
      <ContentBox>
        <H1>
          <small>Hi, {`I'm`}</small> Aindrilla
        </H1>
        <Body>Founder & Yoga Instructor</Body>
        <H4>
          {`I'm`} a certified Yoga trainer who can help you achieve your fitness
          goals.
        </H4>
        <Skills>
          <H4></H4>
          {skills.map((skill) => (
            <Skill key={skill}>{skill}</Skill>
          ))}
        </Skills>
      </ContentBox>
    </Container>
  )
}
