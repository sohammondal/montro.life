export const scrollTo = (elemId: string, options?: ScrollIntoViewOptions) => {
  if (!elemId) return
  try {
    const elem = document?.getElementById(elemId)
    if (elem) {
      elem?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
        ...options,
      })
    }
  } catch (error) {
    console.log(error)
  }
}

export const isMobileDevice = (() => {
  try {
    return window?.matchMedia('only screen and (max-width: 760px)').matches
  } catch (error) {
    return false
  }
})()

export const hasWindow = (() => {
  return typeof window !== 'undefined'
})()
