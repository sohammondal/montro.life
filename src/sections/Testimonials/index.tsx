import React from 'react'
import { Parallax } from 'react-parallax'
import Waves from 'react-wavify'

import { H1 } from 'components'
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
      <Waves {...wavesProps} className="blob top-blob" />
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
      <Parallax bgImage="/images/parallax-bg-2.png" strength={450} blur={2}>
        <Content>
          <Carousel />
        </Content>
      </Parallax>
      <Blobs />
    </Container>
  )
}
