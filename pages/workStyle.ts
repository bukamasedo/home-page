import styled from 'styled-components'
import { md } from '@/constants/breakpoints'

export const MainStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 2rem;
  padding-top: 5rem;

  @media (min-width: ${md}px) {
    padding-top: 0;
    padding: 5rem 2rem 0 2rem;
  }
`
