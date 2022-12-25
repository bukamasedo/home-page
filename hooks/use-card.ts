import { useRef, useEffect } from 'react'
import { useSpring } from '@react-spring/web'
import { useGesture } from '@use-gesture/react'

const calcX = (y: number, ly: number) => -(y - ly - window.innerHeight / 2) / 40
const calcY = (x: number, lx: number) => (x - lx - window.innerWidth / 2) / 40

const useCard = () => {
  useEffect(() => {
    const preventDefault = (e: Event) => e.preventDefault()
    document.addEventListener('gesturestart', preventDefault)
    document.addEventListener('gesturechange', preventDefault)

    return () => {
      document.removeEventListener('gesturestart', preventDefault)
      document.removeEventListener('gesturechange', preventDefault)
    }
  }, [])

  const target = useRef(null)
  const [{ x, y, rotateX, rotateY, rotateZ }, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    x: 0,
    y: 0,
    config: { mass: 5, tension: 350, friction: 40 },
  }))

  useGesture(
    {
      onPinch: ({ offset: [a] }) => api({ rotateZ: a }),
      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        api({
          rotateX: calcX(py, y.get()),
          rotateY: calcY(px, x.get()),
        }),
      onHover: ({ hovering }) => !hovering && api({ rotateX: 0, rotateY: 0 }),
      onWheel: ({ event }) => {
        event.preventDefault()
      },
    },
    { target, eventOptions: { passive: false } }
  )

  return {
    target,
    x,
    y,
    rotateX,
    rotateY,
    rotateZ,
  }
}

export default useCard
