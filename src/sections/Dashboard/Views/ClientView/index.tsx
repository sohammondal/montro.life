import React from 'react'

import { Container } from 'components/Container'
import { H2 } from 'components/Typography'
import { useAppContext } from 'context'
import { parseFullName } from 'helpers'

import { containerStyles } from '../styles'

export const ClientView = () => {
  const { user } = useAppContext()
  return (
    <Container {...containerStyles}>
      <H2>Welcome {parseFullName(user?.name || '').firstName}</H2>
    </Container>
  )
}
