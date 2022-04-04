import { CSSProp } from 'styled-components'

import { ITheme } from '.'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends ITheme {}
}
declare module 'react' {
  interface Attributes {
    css?: CSSProp<ITheme>
  }
}
