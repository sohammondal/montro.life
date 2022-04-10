import NextImage from 'next/image'
import React from 'react'

import { Body, Container, H1, H4 } from 'components'
import { sectionIds } from 'constant'

import { containerStyles, Trainer, Wrapper } from './styles'

const trainers = [
  {
    name: 'Aindrilla Das',
    description: '',
    tags: ['Yoga Instructor'],
    image: '/images/yoga-pose-4.png',
  },
  {
    name: 'Rahul Bera',
    description: '',
    tags: ['Weight Loss Expert'],
    image: '/images/yoga-pose-4.png',
  },
]

export const Trainers = () => {
  return (
    <Container {...containerStyles} id={sectionIds.trainers}>
      <H1>Meet Our Expert Trainers</H1>
      <Wrapper>
        {trainers.map((trainer) => {
          const { name, image } = trainer
          return (
            <Trainer.Card key={name}>
              <Trainer.Image>
                <NextImage
                  src={image}
                  layout="responsive"
                  width={'100%'}
                  height={'100%'}
                  objectFit="cover"
                />
              </Trainer.Image>
              <Trainer.Content>
                <H4 bold font="Afterglow">
                  {trainer.name}
                </H4>
                <Body>{trainer.tags.join(' • ')}</Body>
              </Trainer.Content>
            </Trainer.Card>
          )
        })}
      </Wrapper>
    </Container>
  )
}
