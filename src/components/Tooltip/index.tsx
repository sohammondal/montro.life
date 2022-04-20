import React from 'react'

import { Content, Wrapper } from './styles'
import { Props } from './types'

import { Body } from '../Typography'

export const Tooltip: React.FC<Props> = ({
  text = 'Tooltip text',
  arrow = true,
  position = 'left',
  children,
}) => {
  return (
    <Wrapper className="tooltip-wrapper">
      {children || 'Hover over me'}
      <Content position={position} arrow={arrow} className="tooltip-content">
        {typeof text === 'string' ? <Body variant="sm">{text}</Body> : text}
      </Content>
    </Wrapper>
  )
}
