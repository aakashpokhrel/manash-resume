import { useEffect, useState } from 'react'

export function useScrollTop(threshold = 400) {
  const [isPastThreshold, setIsPastThreshold] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsPastThreshold(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return isPastThreshold
}
