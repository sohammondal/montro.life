import { QRCodeSVG } from 'qrcode.react'
import React, { useState } from 'react'
import { MdOutlineQrCode } from 'react-icons/md'

import { Button } from 'components/Button'
import { Container } from 'components/Container'
import { Modal } from 'components/Modal'
import { H2, H4 } from 'components/Typography'
import { useAppContext } from 'context'
import { parseFullName } from 'helpers'

import { qrCodeBtnCss } from './styles'

import { containerStyles, btnCss, modalCss } from '../styles'

export const ClientView = () => {
  const { user } = useAppContext()
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)
  return (
    <Container {...containerStyles}>
      <H2 suppressHydrationWarning>
        Welcome {parseFullName(user?.name || '').firstName}
      </H2>
      <Button css={[btnCss, qrCodeBtnCss]} onClick={toggle}>
        <MdOutlineQrCode className="qr-icon" />
        My QR Code
      </Button>
      <Modal
        isOpen={open}
        onBackgroundClick={toggle}
        onEscapeKeydown={toggle}
        css={modalCss}
      >
        <QRCodeSVG
          width="80%"
          height="80%"
          value={JSON.stringify(user)}
          className="qr-code"
        />
        <H4>Show this to your trainer to mark your attendance</H4>
      </Modal>
    </Container>
  )
}
