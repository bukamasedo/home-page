import Image from 'next/image'
import styled from 'styled-components'
import { animated } from '@react-spring/web'
import { colors } from '@/utils/theme'
import { px2vw } from '@/utils/responsive'
import { md } from '@/constants/breakpoints'
import { FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa'

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
    padding: 0 2rem 0 2rem;
  }
`

export const MoveCardStyle = styled.div`
  & > div {
    width: ${px2vw(500, md)};
    height: 20rem;
  }
  @media (min-width: ${md}px) {
    & > div {
      width: 400px;
    }
  }
`

export const ProfileImageStyle = styled(Image)`
  width: 10rem;
  height: 10rem;
  border: 3px solid ${colors.white};
  object-fit: cover;
  position: relative;
  border-radius: 100%;
  user-drag: none;
  -webkit-user-drag: none;
  -moz-user-select: none;

  @media (min-width: ${md}px) {
    width: 200px;
    height: 200px;
  }
`

export const NameStyle = styled(animated.div)`
  margin-top: 1rem;
  font-size: 1.5rem;
  color: ${colors.black};
`

export const ProfileStyle = styled(animated.div)`
  color: ${colors.gray};
`

export const CardWrapperStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`

export const TitleStyle = styled.div`
  text-align: start;
  font-weight: bold;
  color: ${colors.black};
`

export const TableStyle = styled.table`
  color: ${colors.black};
  font-size: 0.7rem;
  text-align: start;

  th {
    font-family: 'Source Sans Pro', sans-serif;
  }

  td {
    padding-left: 0.5rem;
  }
`

export const UlStyle = styled.ul`
  color: ${colors.black};
  font-size: 0.7rem;
  text-align: start;
  list-style: none;
`

export const AnchorStyle = styled.a`
  display: flex;
  align-items: center;
`

export const SnsStyle = styled.span`
  color: ${colors.black};
  padding-left: 0.5rem;
`

// icons
export const TwitterIconStyle = styled(FaTwitter)`
  color: ${colors.black};
`
export const GithubIconStyle = styled(FaGithub)`
  color: ${colors.black};
`
export const InstagramIconStyle = styled(FaInstagram)`
  color: ${colors.black};
`
