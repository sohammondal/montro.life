import styled, { css } from 'styled-components'

import { cursor } from 'theme'

import { Props } from './types'

export const buttonStyles = css<Props>`
  font-family: Poppins;
  font-weight: unset;
  ${cursor.pointer}
  border: 0;
  border-radius: 27px;
  padding: 0px 20px;
  font-size: 1rem;
  line-height: 23px;
  height: 40px;
  transition: all ease 0.3s;

  ${(props) => {
    return css`
      border: 2px solid ${props.theme.colors.Caramel};
      background-color: ${props.theme.colors.Caramel};
      color: ${props.theme.colors.Black};
      ${props.isLoading &&
      css`
        padding: 0;
        line-height: 0;
      `};
      &:hover {
        background-color: ${props.theme.colors.BridalHealth};
        color: ${props.theme.colors.Black};
      }
    `
  }}
`

export const StyledButton = styled.button<Props>`
  ${buttonStyles}
`
