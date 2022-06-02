import React, { useState } from 'react'
import { MdOutlineQrCodeScanner } from 'react-icons/md'

import { getUsers } from 'api/axios'
import { Button } from 'components/Button'
import { Container } from 'components/Container'
import { Select } from 'components/Select'
import { H2, H4 } from 'components/Typography'
import { toast } from 'helpers/toast'
import { UserInfo } from 'types'

import { AttendanceForm } from './AttendanceForm'
import { QrCodeScanner } from './QrCodeScanner'
import { scannerBtnCss, manualBtnCss, ManualBox } from './styles'

import { containerStyles, btnCss, Separator } from '../styles'

const getClients = async (query: string) => {
  try {
    const { data: users } = await getUsers({
      filters: {
        $or: [
          {
            username: {
              $containsi: query,
            },
          },
          {
            name: {
              $containsi: query,
            },
          },
          {
            email: {
              $containsi: query,
            },
          },
          {
            phone: {
              $containsi: query,
            },
          },
        ],
        role: {
          type: {
            $eq: 'client',
          },
        },
      },
    })

    return users.map((user: UserInfo) => ({
      name: `${user.name} (${user.phone})`,
      value: JSON.stringify(user),
    }))
  } catch (error) {
    console.log(error)
    return []
  }
}

export const TrainerView = () => {
  const [client, setClient] = useState<UserInfo | null>(null)
  const [openScanner, setOpenScanner] = useState(false)
  const toggleScannerModal = () => {
    setOpenScanner(!openScanner)
  }
  const [openAttendanceModal, setOpenAttendanceModal] = useState(false)
  const toggleAttendanceModal = () => {
    setOpenAttendanceModal(!openAttendanceModal)
  }
  const handleScan = (data: string | null) => {
    if (data) {
      setClient(JSON.parse(data))
      toggleScannerModal()
      toggleAttendanceModal()
    }
  }
  const handleError = (err: any) => {
    console.error('[ERROR] Scan failed.\n', err)
    toast?.error(err?.toString())
  }

  const closeAttendanceModal = () => {
    toggleAttendanceModal()
    setClient(null)
  }

  return (
    <Container {...containerStyles}>
      <H2>Welcome Trainer</H2>
      <H4>Scan or search for client to mark attendance</H4>
      <Button css={[btnCss, scannerBtnCss]} onClick={toggleScannerModal}>
        <MdOutlineQrCodeScanner className="qr-icon" />
        Scanner
      </Button>
      <Separator>or</Separator>
      <ManualBox>
        <Select
          placeholder="Type name, phone or email to search..."
          search
          value={JSON.stringify(client)}
          onChange={(value) => {
            setClient(JSON.parse(value as unknown as string))
          }}
          options={[]}
          getOptions={getClients}
        />
        <Button css={[btnCss, manualBtnCss]} onClick={toggleAttendanceModal}>
          Mark Attendance
        </Button>
      </ManualBox>
      <AttendanceForm
        client={client}
        isOpen={openAttendanceModal}
        onBackgroundClick={toggleAttendanceModal}
        onEscapeKeydown={toggleAttendanceModal}
        closeModal={closeAttendanceModal}
      />
      <QrCodeScanner
        modalProps={{
          isOpen: openScanner,
          onBackgroundClick: toggleScannerModal,
          onEscapeKeydown: toggleScannerModal,
        }}
        qrReaderProps={{
          onError: handleError,
          onScan: handleScan,
        }}
      />
    </Container>
  )
}
