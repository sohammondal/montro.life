import styled, { css, CSSProp } from 'styled-components'

import { cursor } from 'theme'

import { Positions } from './types'

type PositionStyles = Record<Positions, { tooltip: CSSProp; arrow: CSSProp }>

export const positionStyles: PositionStyles = {
  top: {
    tooltip: css`
      bottom: 120%;
      left: 50%;
      margin-left: -60px;
    `,
    arrow: css`
      top: 100%; /* At the bottom of the tooltip */
      left: 50%;
      margin-left: -5px;
      border-top-color: black;
    `,
  },
  right: {
    tooltip: css`
      top: -5px;
      left: 105%;
    `,
    arrow: css`
      top: 50%;
      right: 100%; /* To the left of the tooltip */
      margin-top: -5px;
      border-right-color: black;
    `,
  },
  bottom: {
    tooltip: css`
      width: 120px;
      top: 100%;
      left: 50%;
      margin-left: -60px; /* Use half of the width (120/2 = 60), to center the tooltip */
    `,
    arrow: css`
      bottom: 100%; /* At the top of the tooltip */
      left: 50%;
      margin-left: -5px;
      border-bottom-color: black;
    `,
  },
  left: {
    tooltip: css`
      top: -5px;
      right: 105%;
    `,
    arrow: css`
      top: 50%;
      left: 100%; /* To the right of the tooltip */
      margin-top: -5px;
      border-left-color: black;
    `,
  },
}

export const Content = styled.span<{ position: Positions; arrow: boolean }>`
  visibility: hidden;
  min-width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px;
  border-radius: 6px;
  opacity: 0;
  transition: opacity 1s;

  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
  ${(props) => {
    const { tooltip, arrow } =
      positionStyles[props.position] || ({} as PositionStyles)

    return css`
      ${tooltip}
      :after {
        content: ' ';
        position: absolute;
        border-width: 5px;
        border-style: solid;
        border-color: transparent;
        ${props.arrow && arrow}
      }
    `
  }}
`

export const Wrapper = styled.span`
  position: relative;
  display: inline-block;
  border-bottom: 2px solid ${(props) => props.theme.colors.Black};
  ${cursor.pointer}
  transition: all 0.2s ease;

  :hover {
    ${Content} {
      visibility: visible;
      opacity: 1;
    }
  }
`
