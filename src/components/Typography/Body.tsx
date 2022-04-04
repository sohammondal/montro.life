import styled, { css } from 'styled-components'

import { cursor } from 'theme'

interface Props {
  bold?: boolean
  font?: string
  variant?: 'sm' | 'md' | 'lg'
}

export const Body = styled.p<Props>`
  margin: 0;
  padding: 0;
  ${cursor.default}

  ${(props) => {
    const fontWeight = props.bold ? 600 : 400

    const size =
      props.variant === 'sm'
        ? '0.75rem'
        : props.variant === 'md'
        ? '0.875rem'
        : '1rem'

    const lineHeight =
      props.variant === 'sm'
        ? '0.9rem'
        : props.variant === 'md'
        ? '1.05rem'
        : '1.2rem'

    return css`
      font-family: ${props.font};
      font-size: ${size};
      font-weight: ${fontWeight};
      line-height: ${lineHeight};
    `
  }}
`

Body.defaultProps = {
  bold: false,
  variant: 'lg',
  font: 'Poppins',
}
