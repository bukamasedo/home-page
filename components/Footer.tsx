import styled from 'styled-components'
import { colors } from '@/utils/theme'

export const FooterStyle = styled.div`
  font-size: 12px;
  color: ${colors.gray};
  height: 20px;
  position: relative;
  bottom: 0;
  width: 100%;
  text-align: center;
`

const Footer = () => (
  <FooterStyle>© 2022 Shu Hirouchi. All Rights Reserved.</FooterStyle>
)
export default Footer
