import styled from 'styled-components'

import { StyledBgCircleProps, StyledProgressCircleProps } from './types'

export const StyledSvg = styled.svg`
  width: 100%;
  height: 100%;
`

export const BackgroundCircle = styled.circle<StyledBgCircleProps>`
  fill: none;
  stroke: ${(props) => props.bgStrokeColor};
`

export const ProgressCircle = styled.circle<StyledProgressCircleProps>`
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: stroke-dashoffset ease 1s;

  ${(props) => {
    const { progressStrokeColor, dashArray, dashOffset } = props
    return `
         stroke: ${progressStrokeColor};
         stroke-dasharray: ${dashArray};
         stroke-dashoffset: ${dashOffset};
        `
  }}
`
export const Text = styled.text`
  font-size: 3.5em;
  font-weight: bold;
  dominant-baseline: middle;
  text-anchor: middle;
`
