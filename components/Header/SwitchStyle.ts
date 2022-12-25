import { FaRegLightbulb } from 'react-icons/fa'
import styled from 'styled-components'

export const SwitchStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${(props) => props.theme.primary};
  width: 30px;
  height: 30px;
  border-radius: 6px;
  cursor: pointer;
`

export const LightIconStyle = styled(FaRegLightbulb)`
  color: ${(props) => props.theme.body};
`
