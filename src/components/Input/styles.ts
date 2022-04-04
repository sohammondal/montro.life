import styled, { css } from 'styled-components'

import { borderRadius } from 'theme'

export const Wrapper = styled.div``

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  background: ${(props) => props.theme.colors.White};
  border: 1px solid ${(props) => props.theme.colors.primary};
  box-sizing: border-box;
  ${borderRadius.custom(34)}
  font-family: AvenirReg;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.colors.Black};
  padding: 0 20px;

  :focus-visible {
    outline: none;
    color: ${(props) => props.theme.colors.primary};
  }
`

export const bodyStyles = css`
  height: 10px;
  color: ${(props) => props.theme.colors.Black};
  margin: 5px 0 2px 10px;
`
