export type Positions = 'top' | 'right' | 'bottom' | 'left'

export interface Props {
  text: string | React.ReactElement
  position?: Positions
  arrow?: boolean
}
