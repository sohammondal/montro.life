import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useRouteChangeTracker = () => {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!router?.events) return

    const handleStart = () => {
      setLoading(true)
    }
    const handleComplete = () => {
      setLoading(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router.events])

  return { isRouteChanging: loading }
}
