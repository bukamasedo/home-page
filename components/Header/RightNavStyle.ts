import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'

export const RightNavStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

export const HamburgerButtonStyle = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${(props) => props.theme.basic};
    background-color: ${(props) => props.theme.body};
    width: 30px;
    height: 30px;
    border-radius: 6px;
    cursor: pointer;
  }
`

export const PopupStyle = styled.div`
  position: absolute;
  transition: all 0.3s;
  right: 1.5rem;
  top: 75px;
  width: 10rem;
  padding: 0.5rem 0;
  background-color: ${(props) => props.theme.basic};
  border: 1.5px solid ${(props) => props.theme.comment};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const AnchorStyle = styled.a`
  display: none;
  &:hover {
    background-color: ${(props) => props.theme.comment};
  }
  @media (max-width: 768px) {
    padding: 0.3rem 1rem;
    color: ${(props) => props.theme.body};
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }
`

export const HamburgerIconStyle = styled(FaBars)`
  color: ${(props) => props.theme.basic};
`
