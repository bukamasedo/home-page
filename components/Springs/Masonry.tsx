import React, { useRef, useState, useEffect, useMemo } from 'react'
import { useMeasure } from '@reactivers/hooks'
import { useTransition, a } from '@react-spring/web'
import shuffle from 'lodash.shuffle'
import useMedia from '@/hooks/use-media'
import { ListStyle } from '@/components/Springs/MasonryStyle'

const data = [
  { css: 'othello-game.png', height: 430 },
  { css: 'markdown-editor.png', height: 500 },
  { css: 'vim.png', height: 430 },
  {
    css: 'https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg',
    height: 300,
  },
  {
    css: 'https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg',
    height: 300,
  },
  {
    css: 'https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg',
    height: 200,
  },
  {
    css: 'https://images.pexels.com/photos/227675/pexels-photo-227675.jpeg',
    height: 300,
  },
  {
    css: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg',
    height: 200,
  },
  {
    css: 'https://images.pexels.com/photos/327482/pexels-photo-327482.jpeg',
    height: 400,
  },
  {
    css: 'https://images.pexels.com/photos/2736834/pexels-photo-2736834.jpeg',
    height: 200,
  },
  {
    css: 'https://images.pexels.com/photos/249074/pexels-photo-249074.jpeg',
    height: 150,
  },
]

const Masonry = () => {
  const columns = useMedia(
    ['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'],
    [5, 4, 3],
    2
  )

  const ref = useRef(null)
  const { width } = useMeasure({ ref })

  const [items, set] = useState(data)

  useEffect(() => {
    const t = setInterval(() => set(shuffle), 2000)
    return () => clearInterval(t)
  }, [])

  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0)
    let gridItems = items.map((child) => {
      const column = heights.indexOf(Math.min(...heights))
      const x = (width / columns) * column
      const y = (heights[column] += child.height / 2) - child.height / 2
      return {
        ...child,
        x,
        y,
        width: width / columns,
        height: child.height / 2,
      }
    })
    return [heights, gridItems]
  }, [columns, items, width])

  const transitions = useTransition(gridItems, {
    key: (item: { css: string; height: number }) => item.css,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  })

  return (
    <ListStyle ref={ref} style={{ height: Math.max(...heights) }}>
      {transitions((style, item) => (
        <a.div style={style}>
          <div
            style={{
              backgroundImage: `url(${item.css}?auto=compress&dpr=2&h=500&w=500)`,
            }}
          />
        </a.div>
      ))}
    </ListStyle>
  )
}

export default Masonry
