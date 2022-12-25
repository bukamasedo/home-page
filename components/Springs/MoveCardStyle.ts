import { animated } from '@react-spring/web'
import styled from 'styled-components'
import { colors } from '@/utils/theme'

export const MoveCardStyle = styled(animated.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 10px 10px 10px -5px ${(props) => props.theme.comment};
  transition: box-shadow 0.5s, opacity 0.5s;
  will-change: transform;
  overflow: hidden;
  touch-action: none;
  background-color: ${colors.paleWhite};
`
