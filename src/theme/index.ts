import { DefaultTheme } from 'styled-components'

import { colors, IColors } from './colors'
import { spacings, ISpacings } from './spacings'

export { colors }
export * from './common.styles'
export { GlobalStyles } from './global.styles'
export * from './animations'

export enum Themes {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ITheme {
  colors: IColors
  mode: Themes.DARK | Themes.LIGHT
  spacings: ISpacings
}

export const theme: DefaultTheme = {
  colors,
  mode: Themes.LIGHT,
  spacings,
}
