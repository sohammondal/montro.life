import React from 'react'

import { colors } from 'theme'

import { Svg } from './styles'
import { Props } from './types'

export const Spinner: React.FC<Props> = ({ size, color }) => {
  return (
    <Svg size={size} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="20" stroke={color} />
    </Svg>
  )
}

Spinner.defaultProps = {
  size: '20px',
  color: colors.primary,
}
