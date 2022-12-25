import styled from 'styled-components'
import { colors } from '@/utils/theme'
import { md } from '@/constants/breakpoints'
import { px2vw } from '@/utils/responsive'

export const CardStyle = styled.div`
  width: ${px2vw(500, md)};
  height: 8rem;
  background-color: ${colors.paleWhite};
  color: ${colors.black};
  border-radius: 5px;
  border: 2px solid ${colors.gray};
  padding: 1rem;

  @media (min-width: ${md}px) {
    width: 15rem;
    height: 8rem;
  }
`
