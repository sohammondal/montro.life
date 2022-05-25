import React from 'react'
import { FaInfo } from 'react-icons/fa'

import { Body, Container, H1, H4, Tooltip, Image } from 'components'
import { sectionIds } from 'constant'

import { containerStyles, ContentBox, MediaBox, Skill, Skills } from './styles'

const skills = [
  'Weight Loss',
  'Power Yoga',
  'Deep Relaxation',
  'Meditation',
  'Pranayama & Face Yoga',
  <>
    <Tooltip text={`PCOD PCOS Thyroid Hormonal Imbalance`} position={'bottom'}>
      <Body variant="md">
        Women Health <FaInfo />
      </Body>
    </Tooltip>
  </>,
]

export const AboutAindrilla = () => {
  return (
    <Container {...containerStyles} id={sectionIds.aboutAindrilla}>
      <MediaBox>
        <Image
          src={`/images/aindrilla.png`}
          layout="intrinsic"
          width={500}
          height={500}
          objectFit="contain"
          alt="Meet Aindrilla Das"
        />
      </MediaBox>
      <ContentBox>
        <H1>
          <small>Hi, {`I'm`}</small> Aindrilla
        </H1>
        <H4>
          {`I'm`} a{' '}
          <Tooltip
            position="top"
            text={
              <Body variant="sm">
                Ministry of Ayush {`&`} <br />
                Yoga Alliance (USA)
              </Body>
            }
          >
            certified
          </Tooltip>{' '}
          Yoga instructor. Since {`I'm `}
          highly experienced in body type analysis, I can help you achieve your
          fitness goals quickly and efficiently.
          <br />
          <br />
        </H4>
        <Skills>
          <H4>{`Start your customized yoga journey with me today!`}</H4>
          {skills.map((skill, index) => (
            <Skill key={`skill-${index}`}>
              {typeof skill === 'string' ? (
                <Body variant="md">{skill}</Body>
              ) : (
                skill
              )}
            </Skill>
          ))}
        </Skills>
      </ContentBox>
    </Container>
  )
}
