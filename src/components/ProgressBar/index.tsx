import React from 'react'

import { StyledSvg, BackgroundCircle, ProgressCircle, Text } from './styles'
import { Props } from './types'

const parentClassName = 'montro-progress-bar'

export const CircularProgressBar = (props: Props): React.ReactElement => {
  const {
    sqSize,
    showBg,
    showText,
    strokeWidth,
    text,
    percentage,
    bgStrokeColor,
    progressStrokeColor,
  } = props

  // SVG centers the stroke width on the radius, subtract out so circle fits in square
  const radius = (sqSize - strokeWidth) / 2
  // Enclose circle in a circumscribing square
  const viewBox = `0 0 ${sqSize} ${sqSize}`
  // Arc length at 100% coverage is the circle circumference
  const dashArray = radius * Math.PI * 2
  // Scale 100% coverage overlay with the actual percent
  const dashOffset = dashArray - (dashArray * percentage) / 100

  const size = sqSize / 2

  const svgProps = {
    width: sqSize,
    height: sqSize,
    viewBox,
    className: parentClassName,
  }

  const bgProps = {
    bgStrokeColor,
    cx: size,
    cy: size,
    r: Math.round(radius),
    strokeWidth: `${strokeWidth}px`,
    className: `${parentClassName}-bg-circle`,
  }

  const progressProps = {
    ...bgProps,
    transform: `rotate(90 ${size}, ${size})`, // Start progress marker at 6 O'Clock
    dashArray,
    strokeDashoffset: dashOffset < 0 ? 0 : dashOffset,
    progressStrokeColor,
    className: `${parentClassName}-progress-circle`,
  }

  const bg = showBg ? <BackgroundCircle {...bgProps} /> : null

  const centerText = showText ? (
    <Text x="50%" y="50%" className={`${parentClassName}-text`}>
      {text || percentage}
    </Text>
  ) : null

  return (
    <StyledSvg {...svgProps}>
      {bg}
      {percentage > 0 ? <ProgressCircle {...progressProps} /> : null}
      {centerText}
    </StyledSvg>
  )
}

CircularProgressBar.defaultProps = {
  sqSize: 200,
  percentage: 25,
  text: '',
  strokeWidth: 10,
  bgStrokeColor: '#ddd',
  progressStrokeColor: 'tomato',
  showBg: true,
  showText: true,
}
