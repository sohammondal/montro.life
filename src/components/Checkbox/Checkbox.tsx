import React from 'react'

import { colors } from 'theme'

import { Container, StyledCheckbox, Icon } from './styles'

import { Body } from '../Typography'

interface Props {
  selected: boolean
  color?: string
  borderColor?: string
  selectIconColor?: string
  disabled?: boolean
  label?: string
  onClick: () => void
}

export const Checkbox = (props: Props): React.ReactElement => {
  const {
    selected,
    disabled,
    color,
    borderColor,
    selectIconColor,
    label,
    onClick,
  } = props

  const checkBoxProps = {
    disabled,
    selected,
    color,
    borderColor,
    onClick: () => !disabled && onClick(),
  }

  const checkIcon = (
    <Icon color={selectIconColor} viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12" />
    </Icon>
  )

  return (
    <Container className="checkbox-container">
      <StyledCheckbox {...checkBoxProps}>
        {selected && checkIcon}
      </StyledCheckbox>
      <Body variant="md">{label}</Body>
    </Container>
  )
}

Checkbox.defaultProps = {
  color: colors.Black,
  borderColor: colors.Black,
  selectIconColor: colors.BridalHealth,
  disabled: false,
  label: 'Custom Label',
}
