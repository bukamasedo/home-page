import { MoveCardStyle } from '@/components/Springs/MoveCardStyle'
import useCard from '@/hooks/use-card'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const MoveCard = ({ children }: Props) => {
  const { target, x, y, rotateX, rotateY, rotateZ } = useCard()

  return (
    <MoveCardStyle
      ref={target}
      style={{
        transform: 'perspective(600px)',
        x,
        y,
        rotateX,
        rotateY,
        rotateZ,
      }}
    >
      <div>{children}</div>
    </MoveCardStyle>
  )
}

export default MoveCard
