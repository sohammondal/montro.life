import React from 'react'
import ReactSelectSearch, { SelectSearchProps } from 'react-select-search'

import { Body } from 'components/Typography'

import { Wrapper, bodyStyles } from './styles'

interface RSSelectProps extends SelectSearchProps {
  error?: boolean
  errorMessage?: string
}

export const Select: React.FC<RSSelectProps> = ({
  error,
  errorMessage,
  ...props
}) => {
  return (
    <Wrapper className="select-wrapper">
      <ReactSelectSearch {...props} />
      <Body variant="sm" bold css={bodyStyles}>
        {error && errorMessage}
      </Body>
    </Wrapper>
  )
}
