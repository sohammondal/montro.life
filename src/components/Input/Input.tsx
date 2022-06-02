import React, { InputHTMLAttributes } from 'react'

import { Wrapper, StyledInput, labelCss, errorCss } from './styles'

import { Body } from '../Typography/Body'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: boolean
  errorMessage?: string
}

export const Input: React.FC<Props> = ({
  label,
  error,
  errorMessage,
  ...props
}) => {
  return (
    <Wrapper className="input-wrapper">
      <Body bold css={labelCss} className="label">
        {label}
      </Body>
      <StyledInput {...props} />
      <Body variant="sm" bold css={errorCss} className="error-label">
        {error && errorMessage}
      </Body>
    </Wrapper>
  )
}

Input.defaultProps = {
  label: '',
  error: false,
  errorMessage: 'custom error message',
}
