import styled, { css } from 'styled-components'

import { flexRowCenter } from 'theme'

export interface Props {
  selected: boolean
  color?: string
  borderColor?: string
  disabled?: boolean
}

export const Container = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
`

export const Icon = styled.svg`
  width: 100%;
  fill: none;
  stroke-width: 3px;
  ${({ color }) => `stroke: ${color};`}
`

export const StyledCheckbox = styled.div<Props>`
  ${flexRowCenter}
  width: 16px;
  height: 16px;
  transition: all 2ms;
  margin-right: 8px;

  ${({ color, selected, disabled, borderColor }) => {
    let background = selected ? color : 'none'
    background =
      !selected && disabled
        ? 'none'
        : background /* background color should be none when not selected */

    const border = selected ? color : borderColor
    const borderRadius = '12.5%'
    const opacity = disabled ? 0.5 : 1
    const cursor = disabled ? 'not-allowed' : 'pointer'

    return css`
      background: ${background};
      border: 2px solid ${border};
      border-radius: ${borderRadius};
      opacity: ${opacity};
      cursor: ${cursor};
    `
  }}
`
