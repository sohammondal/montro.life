import React, { InputHTMLAttributes } from 'react'

import { Wrapper, StyledInput, bodyStyles } from './styles'

import { Body } from '../Typography/Body'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  errorMessage?: string
}

export const Input: React.FC<Props> = ({ error, errorMessage, ...props }) => {
  return (
    <Wrapper className="input-wrapper">
      <StyledInput {...props} />
      <Body variant="sm" bold css={bodyStyles}>
        {error && errorMessage}
      </Body>
    </Wrapper>
  )
}

Input.defaultProps = {
  error: false,
  errorMessage: 'custom error message',
}
