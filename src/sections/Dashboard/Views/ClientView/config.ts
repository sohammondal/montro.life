import { ChartData } from 'chart.js'

export const borderColors = [
  'rgb(255, 99, 132)',
  'rgb(255, 159, 64)',
  'rgb(255, 205, 86)',
  'rgb(75, 192, 192)',
  'rgb(54, 162, 235)',
  'rgb(153, 102, 255)',
]

export const bgColors = [
  'rgba(255, 99, 132, 0.2)',
  'rgba(255, 159, 64, 0.2)',
  'rgba(255, 205, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(153, 102, 255, 0.2)',
]

export interface SessionDetails {
  totalClasses: number
  totalSessions: number
  currentSession: {
    classesLeft: number
    classesCompleted: number
  }
}

export const initialChartData: ChartData<'doughnut'> = {
  labels: Array(12).fill('Yet to attend'),
  datasets: [
    {
      label: 'Attendance tracker',
      data: Array(12).fill(25),
      backgroundColor: Array(12).fill('transparent'),
      borderColor: Array(12).fill('rgb(201, 203, 207)'),
      borderWidth: 1,
      hoverBorderWidth: 2,
      hoverBorderColor: Array(12).fill('rgb(201, 203, 207)'),
    },
  ],
}
