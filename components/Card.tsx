import { ReactNode } from 'react'
import { CardStyle } from '@/components/CardStyle'

interface Props {
  children: ReactNode
}

const Card = ({ children }: Props) => {
  return <CardStyle>{children}</CardStyle>
}

export default Card
