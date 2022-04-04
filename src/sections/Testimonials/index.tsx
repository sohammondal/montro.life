import React from 'react'
import { Parallax } from 'react-parallax'

import { H1 } from 'components'
import { colors } from 'theme'

import { Container, Content } from './styles'

const Blobs = () => {
  return (
    <>
      <svg
        width="100%"
        height="96"
        viewBox="0 0 1440 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="top-blob"
      >
        <path
          d="M0 57.6L48 60.81C96 63.9 192 70.5 288 65.61C384 60.9 480 44.7 576 41.61C672 38.4 768 48 864 51.21C960 54.3 1056 51.3 1152 49.59C1248 48 1344 48 1392 48H1440V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V57.6Z"
          fill={colors.Caramel}
        />
      </svg>

      <svg
        width="100%"
        height="124"
        viewBox="0 0 1440 124"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="bottom-blob"
      >
        <path
          d="M0 37.4847L48 44.7168C96 51.6786 192 66.5484 288 55.5312C384 44.9196 480 8.42095 576 1.45917C672 -5.77297 768 15.8559 864 23.088C960 30.0498 1056 23.2908 1152 19.4381C1248 15.8559 1344 15.8559 1392 15.8559H1440V124H1392C1344 124 1248 124 1152 124C1056 124 960 124 864 124C768 124 672 124 576 124C480 124 384 124 288 124C192 124 96 124 48 124H0V37.4847Z"
          fill={colors.BridalHealth}
        />
      </svg>
    </>
  )
}

export const Testimonials = () => {
  return (
    <Container>
      <Parallax bgImage="/images/parallax-bg-2.png" strength={500} blur={2}>
        <Content>
          <H1>What our clients say</H1>
        </Content>
      </Parallax>
      <Blobs />
    </Container>
  )
}
