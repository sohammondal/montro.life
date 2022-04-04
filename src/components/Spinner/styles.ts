import styled, { css } from 'styled-components'

import { Props } from './types'

export const Svg = styled.svg<Props>`
  animation: rotate 2s linear infinite;
  z-index: 2;
  ${({ size }) => css`
    width: ${size};
    height: ${size};
  `}

  circle {
    fill: none;
    stroke-width: 5;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`
