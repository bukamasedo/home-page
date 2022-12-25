import styled from 'styled-components'
import { LeftNav, RightNav } from '@/components/Header/index'
import { ReactNode } from 'react'
import Footer from '@/components/Footer'

const LayoutStyle = styled.div`
  position: relative;
  top: 0;
  left: 0;
  min-height: 100vh;
  text-align: center;
  background-color: ${(props) => props.theme.body};
  transition: all 0.25s ease;
  color: ${(props) => props.theme.body};
`

const HeaderStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding: 0 1.5rem;
  z-index: 1;
`

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <LayoutStyle>
      <HeaderStyle>
        <LeftNav />
        <RightNav />
      </HeaderStyle>

      <main>{children}</main>
      <Footer />
    </LayoutStyle>
  )
}

export default Layout
