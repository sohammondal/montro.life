import { Notyf } from 'notyf'

export const toast = (() => {
  if (typeof window === 'undefined') return

  const notyf = new Notyf({
    dismissible: true,
    duration: 5000,
    position: {
      x: 'right',
      y: 'top',
    },
  })

  return notyf
})()
