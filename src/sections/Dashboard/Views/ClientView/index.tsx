import { Chart, ArcElement, Tooltip } from 'chart.js'
import type { ChartData } from 'chart.js'
import { QRCodeSVG } from 'qrcode.react'
import React, { useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { MdOutlineQrCode } from 'react-icons/md'

import { getAttendances } from 'api/axios'
import { Button } from 'components/Button'
import { Container } from 'components/Container'
import { Modal } from 'components/Modal'
import { H4 } from 'components/Typography'
import { useAppContext } from 'context'
import { Attendance } from 'types'

import { bgColors, borderColors, SessionDetails } from './config'
import { SessionDetailsBox } from './SessionDetailsBox'
import { qrCodeBtnCss, containerStyles, ChartWrapper } from './styles'

import { btnCss, modalCss } from '../styles'

Chart.register(ArcElement, Tooltip)

export const ClientView = () => {
  const { user } = useAppContext()
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)
  const [attendances, setAttendances] = useState<Array<Attendance | null>>([])
  const [chartData, setChartData] = useState<ChartData<'doughnut'> | null>(null)
  const [sessionDetails, setSessionDetails] = useState<SessionDetails>({
    totalClasses: 0,
    totalSessions: 0,
    currentSession: { classesLeft: 0, classesCompleted: 0 },
  })

  React.useEffect(() => {
    try {
      if (!user?.id || open) return
      ;(async () => {
        const { data } = await getAttendances({
          fields: ['timestamp', 'type'],
          sort: ['createdAt:desc'],
          filters: {
            client: {
              id: {
                $eq: user.id,
              },
            },
          },
          populate: {
            trainer: {
              fields: ['name'],
            },
          },
        })

        const totalClasses = data.meta.pagination.total
        const totalSessions = Math.floor(totalClasses / 12)
        const classesCompleted = totalClasses % 12 // classes completed in ongoing session (out of 12 classes)
        const classesLeft = 12 - classesCompleted // classes left (out of 12 classes) in ongoing session

        const attendances = [...data.data].splice(0, classesCompleted)

        const records: Array<Attendance | null> = [
          ...attendances.map((attendance) => attendance.attributes),
          ...Array(classesLeft).fill(null),
        ]

        const doughnutData: ChartData<'doughnut'> = {
          labels: [],
          datasets: [
            {
              label: 'Attendance tracker',
              data: [],
              backgroundColor: [],
              borderColor: [],
              borderWidth: 1,
              hoverBorderWidth: 2,
              hoverBorderColor: [],
            },
          ],
        }

        const bgColor = doughnutData.datasets[0]?.backgroundColor as string[]
        const borderColor = doughnutData.datasets[0]?.borderColor as string[]
        const hoverBorderColor = doughnutData.datasets[0]
          ?.hoverBorderColor as string[]

        records.forEach((record, index) => {
          if (record) {
            doughnutData.labels?.push(
              new Date(record.timestamp).toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata',
              })
            )
            doughnutData.datasets[0].data.push(25)
            bgColor.push(bgColors[(index + 1) % bgColors.length])
            borderColor?.push(borderColors[(index + 1) % borderColors.length])
            hoverBorderColor?.push(
              borderColors[(index + 1) % borderColors.length]
            )
          } else {
            doughnutData.labels?.push('Yet to attend')
            doughnutData.datasets[0].data.push(25)
            bgColor.push('transparent')
            borderColor?.push('rgb(201, 203, 207)')
            hoverBorderColor?.push('rgb(201, 203, 207)')
          }
        })

        setAttendances(records)
        setChartData(doughnutData)
        setSessionDetails({
          totalClasses,
          totalSessions,
          currentSession: {
            classesLeft,
            classesCompleted,
          },
        })
      })()
    } catch (error) {
      console.log(error)
    }
  }, [user?.id, open])

  return (
    <Container {...containerStyles}>
      <SessionDetailsBox sessionDetails={sessionDetails} />
      <ChartWrapper>
        {chartData && (
          <Doughnut
            data={chartData}
            options={{
              maintainAspectRatio: true,
              plugins: {
                tooltip: {
                  callbacks: {
                    title: (tooltipItem) => {
                      return tooltipItem[0].label === 'Yet to attend'
                        ? ''
                        : 'Attendance Details'
                    },
                    label: (tooltipItem) => {
                      if (tooltipItem.label === 'Yet to attend')
                        return tooltipItem.label
                      return `Date - ${tooltipItem.label}`
                    },
                    // beforeLabel: () => 'beforeLabel',
                    // afterLabel: () => 'afterLabel',
                    afterBody: (tooltipItem) => {
                      console.log(tooltipItem[0])
                      const index = tooltipItem[0].dataIndex
                      const trainer =
                        attendances[index]?.trainer.data.attributes.name
                      if (trainer)
                        return `Trainer - ${attendances[index]?.trainer.data.attributes.name}`
                      return ''
                    },
                  },
                  boxPadding: 20,
                  displayColors: false,
                },
              },
            }}
          />
        )}
      </ChartWrapper>
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
