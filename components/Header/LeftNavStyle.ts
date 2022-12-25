import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

export const LeftNavStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5em;
`

export const AnchorStyle = styled.a`
  color: ${(props) => props.theme.basic};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  @media (max-width: 768px) {
    display: none;
  }
`

export const LogoStyle = styled.a`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${(props) => props.theme.basic};
`

export const GithubIconStyle = styled(FaGithub)`
  color: ${(props) => props.theme.basic};
`
