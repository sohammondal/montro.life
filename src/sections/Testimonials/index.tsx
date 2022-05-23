import React from 'react'
import { Parallax } from 'react-parallax'
import Waves from 'react-wavify'

import { sectionIds } from 'constant'
import { colors } from 'theme'

import { Carousel } from './Carousel'
import { Container, Content } from './styles'

const wavesProps = {
  fill: colors.Caramel,
  paused: true,
  options: {
    height: 10,
    amplitude: 100,
    points: 3,
  },
}

const Blobs = () => {
  return (
    <>
      <Waves
        {...wavesProps}
        className="blob top-blob"
        id={sectionIds.testimonials}
      />
      <Waves
        {...wavesProps}
        fill={colors.BridalHealth}
        className="blob bottom-blob"
      />
    </>
  )
}

export const Testimonials = () => {
  return (
    <Container>
      <Parallax bgImage="/images/yoga-pose-6.webp" strength={400}>
        <Content id={sectionIds.testimonials}>
          <Carousel />
        </Content>
      </Parallax>
      <Blobs />
    </Container>
  )
}
