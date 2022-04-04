import React from 'react'

import { BurgerButton } from './BurgerButton'
import { Menu, MenuItem, Overlay } from './styles'

interface Props {
  items: Array<React.ReactElement>
}

export const HamburgerMenu: React.FC<Props> = (props) => {
  const [open, setOpen] = React.useState(false)
  const close = () => setOpen(false)
  const toggle = () => setOpen(!open)

  /* Prevent scrolling when menu is open */
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset'
  }, [open])

  return (
    <>
      <BurgerButton open={open} toggle={toggle} />
      <Overlay onClick={close} $open={open}>
        <Menu>
          {props.items.map((item, index) => (
            <MenuItem key={`hamburger-menu-${index}`}>{item}</MenuItem>
          ))}
        </Menu>
      </Overlay>
    </>
  )
}

HamburgerMenu.defaultProps = {
  items: [],
}
