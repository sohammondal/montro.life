import { css } from 'styled-components'

export const flexRowCenter = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const flexColCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const flexRow = css`
  display: flex;
  flex-direction: row;
`

export const flexCol = css`
  display: flex;
  flex-direction: column;
`

const customMediaQuery = (
  width: number,
  type: 'min' | 'max' | 'device' = 'min',
  target = 'only screen',
  orientation: 'portrait' | 'landscape' | null = null
) =>
  `
    @media ${target} and (${type}-width: ${width}px) ${
    orientation ? `and (orientation: ${orientation})` : ``
  }
  `

export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1024),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576),
}

export const textAlign = {
  center: `text-align: center;`,
  left: `text-align: left;`,
  right: `text-align: right;`,
}

export const cursor = {
  pointer: css`
    cursor: pointer;
  `,
  default: css`
    cursor: default;
  `,
}

const customBorderRadius = (
  radius: number | string = 24,
  unit: 'px' | '%' = 'px'
): string => `border-radius: ${radius}${unit};`

export const borderRadius = {
  custom: customBorderRadius,
  circle: customBorderRadius(100, '%'),
  '0': customBorderRadius(0),
  '27': customBorderRadius(27),
  '24': customBorderRadius(24),
}

export const display = {
  flex: css`
    display: flex;
  `,
  block: css`
    display: block;
  `,
  none: css`
    display: none;
  `,
  grid: css`
    display: grid;
  `,
}

export const flexWrap = {
  yes: css`
    flex-wrap: wrap;
  `,
  no: css`
    flex-wrap: nowrap;
  `,
}

export const commonSubtitleStyles = css`
  ${({ theme: { spacings } }) => css`
    margin: ${spacings[22]} auto ${spacings[44]};
  `}
`

/* export const scrollbarStyles = css`
  scrollbar-width: 0.25em;
  scrollbar-track-color: ${(props) => props.theme.colors['6A6767']};
  scrollbar-face-color: ${(props) => props.theme.colors.FFFFFF};

  &::-webkit-scrollbar {
    width: 0.25em;
    background: ${(props) => props.theme.colors['6A6767']};
    ${borderRadius.custom(8)};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.FFFFFF};
    ${borderRadius.custom(8)}
  }
` */
