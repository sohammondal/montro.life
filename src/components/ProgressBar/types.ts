export interface Props {
  sqSize: number // Size of the enclosing square (px)
  percentage: number // Progress in percentage (number)
  strokeWidth: number // Progress bar width (px)
  text: string
  bgStrokeColor: string // Color of the empty progress bar
  progressStrokeColor: string // Color of the progress bar or filler
  showBg: boolean // Boolean to show the empty progress bar background
  showText: boolean // Boolean to show the text in center of progress bar
}

export interface StyledBgCircleProps {
  bgStrokeColor?: string
}

export interface StyledProgressCircleProps {
  progressStrokeColor?: string
  dashArray?: number
  dashOffset?: number
}
