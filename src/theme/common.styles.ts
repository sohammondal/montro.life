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
  desktop: customMediaQuery(1366),
  tabletLandscape: customMediaQuery(1024),
  tabletPortrait: customMediaQuery(768),
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
  inlineBlock: css`
    display: inline-block;
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

export const hw = {
  full: css`
    height: 100%;
    width: 100%;
  `,
  half: css`
    height: 50%;
    width: 50%;
  `,
  custom: (h = 20, unit = '%', w = 0) => css`
    height: ${h}${unit};
    width: ${w || h}${unit};
  `,
}

export const scrollbarStyles = css`
  scrollbar-width: 0.25em;
  scrollbar-track-color: ${(props) => props.theme.colors.WestSide};
  scrollbar-face-color: ${(props) => props.theme.colors.BridalHealth};

  &::-webkit-scrollbar {
    width: 0.25em;
    background-color: ${(props) => props.theme.colors.BridalHealth};
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.BridalHealth};
    border-radius: 8px;
  }
`
