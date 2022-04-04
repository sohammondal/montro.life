import React from 'react'

import { Button } from './styles'

interface Props {
  open: boolean
  toggle: () => void
}

export const BurgerButton: React.FC<Props> = ({ open, toggle }) => {
  return (
    <Button $open={open} onClick={toggle} className="burger-button">
      <span />
      <span />
      <span />
    </Button>
  )
}
