import React from 'react'

import { Container } from 'components/Container'
import { H2 } from 'components/Typography'

import { containerStyles } from '../styles'

export const TrainerView = () => {
  return (
    <Container {...containerStyles}>
      <H2>Welcome Trainer</H2>
    </Container>
  )
}
