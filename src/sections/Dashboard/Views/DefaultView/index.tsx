import router from 'next/router'
import React from 'react'

import { Container } from 'components/Container'
import { H2, H4 } from 'components/Typography'

import { containerStyles } from '../styles'

export const DefaultView = () => {
  return (
    <Container {...containerStyles}>
      <H2>Your role is not set.</H2>
      <H4>
        <small>
          Pl contact Admin at
          <a href="tel:91700335500"> 7003355200</a>
        </small>
        <br />
        <small>
          Once role is set, pl{' '}
          <a
            onClick={() => {
              window !== undefined && router.reload()
            }}
          >
            reload
          </a>
        </small>
      </H4>
    </Container>
  )
}
