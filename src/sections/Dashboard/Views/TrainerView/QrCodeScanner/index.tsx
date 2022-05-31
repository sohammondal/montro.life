import dynamic from 'next/dynamic'
import React from 'react'
import { props } from 'react-qr-reader'

import { Modal, ModalProps } from 'components/Modal'
import { H4 } from 'components/Typography'
import { isMobileDevice } from 'helpers'

import { modalCss } from './styles'

const QrReader = dynamic<props>(() => import('react-qr-reader'), {
  ssr: false,
})

interface Props {
  modalProps: ModalProps
  qrReaderProps: props
}

export const QrCodeScanner: React.FC<Props> = ({
  modalProps,
  qrReaderProps,
}) => {
  return (
    <Modal {...modalProps} css={modalCss}>
      <QrReader {...qrReaderProps} className="qr-reader" />
      <H4>Scan your {`client's`} qr code to mark attendance</H4>
    </Modal>
  )
}

QrCodeScanner.defaultProps = {
  modalProps: {
    isOpen: false,
  },
  qrReaderProps: {
    onError: (err) => console.log(err),
    onScan: (data) => console.log(data),
    delay: 300,
    facingMode: isMobileDevice ? 'user' : 'environment',
  },
}
