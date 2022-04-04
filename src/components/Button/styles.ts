import styled, { css } from 'styled-components'

import { borderRadius, cursor } from 'theme'

import { Props } from './types'

export const buttonStyles = css<Props>`
  font-family: Poppins;
  font-weight: unset;
  ${cursor.pointer}
  border: 0;
  ${borderRadius['27']}
  padding: 0px 20px;
  font-size: 1rem;
  line-height: 23px;
  height: 40px;
  transition: all ease 0.3s;

  ${(props) => {
    return css`
      border: 2px solid ${props.theme.colors.primary};
      background-color: ${props.theme.colors.primary};
      color: ${props.theme.colors.BridalHealth};
      ${props.isLoading &&
      css`
        padding: 0;
        line-height: 0;
      `};
      &:hover {
        background-color: ${props.theme.colors.BridalHealth};
        color: ${props.theme.colors.primary};
      }
    `
  }}
`

export const StyledButton = styled.button<Props>`
  ${buttonStyles}
`
