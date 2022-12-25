import { useEffect, useState } from 'react'

const useMedia = (
  queries: string[],
  values: number[],
  defaultValue: number
) => {
  const [value, set] = useState<number>(defaultValue)

  useEffect(() => {
    const match = () =>
      values[queries.findIndex((q) => window.matchMedia(q).matches)] ??
      defaultValue
    set(match)

    const handler = () => set(match)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [value])
  return value
}

export default useMedia
