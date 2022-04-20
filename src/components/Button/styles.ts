import styled, { css, CSSProp } from 'styled-components'

import { cursor } from 'theme'

import { ButtonVariants, Props } from './types'

const variantStyles: Record<ButtonVariants, CSSProp> = {
  primary: css`
    ${(props) => `
      border: 2px solid ${props.theme.colors.Caramel};
      background-color: ${props.theme.colors.Caramel};
      :hover {
          background-color: ${props.theme.colors.BridalHealth};
          color: ${props.theme.colors.Black};
        }
       
    `}
  `,
  secondary: css`
    background-color: ${(props) => props.theme.colors.BridalHealth};
    border: 0;
    :hover {
      box-shadow: 3px 6px 13px -4px rgba(0, 0, 0, 0.51);
    }
  `,
}

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
      color: ${props.theme.colors.Black};
      ${props.isLoading &&
      css`
        padding: 0;
        line-height: 0;
      `};
      ${variantStyles[props.variant || 'primary']}
    `
  }}
`

export const StyledButton = styled.button<Props>`
  ${buttonStyles}
`
