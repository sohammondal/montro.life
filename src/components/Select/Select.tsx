import React, { InputHTMLAttributes } from 'react'

import { Wrapper, LoaderWrapper, StyledSelect, bodyStyles } from './styles'

import { Spinner } from '../Spinner'
import { Body } from '../Typography'

interface Props extends InputHTMLAttributes<HTMLSelectElement> {
  isLoading?: boolean
  error?: boolean
  errorMessage?: string
}

export const Select: React.FC<Props> = ({
  error,
  errorMessage,
  placeholder,
  children,
  ...props
}) => {
  return (
    <Wrapper className="select-wrapper">
      <LoaderWrapper>{props.isLoading && <Spinner />}</LoaderWrapper>
      <StyledSelect value="" disabled={props.isLoading} {...props}>
        <option key={`standard-default`} value="" disabled hidden>
          {placeholder}
        </option>
        {children}
      </StyledSelect>
      <Body variant="sm" bold css={bodyStyles}>
        {error && errorMessage}
      </Body>
    </Wrapper>
  )
}
