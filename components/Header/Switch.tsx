import { useState, useContext } from 'react'
import { ThemeContext } from '@/contexts/theme'
import { LightIconStyle, SwitchStyle } from '@/components/Header/SwitchStyle'

const Switch = () => {
  const { toggleTheme, isDarkTheme } = useContext(ThemeContext)

  const [isToggled, setIsToggled] = useState(isDarkTheme)

  const onToggle = () => {
    setIsToggled(!isToggled)
    toggleTheme()
  }

  return (
    <SwitchStyle
      onClick={onToggle}
      style={{
        background: isDarkTheme ? '#ff8e3c' : '#2a2a2a',
      }}
    >
      <LightIconStyle />
    </SwitchStyle>
  )
}
export default Switch
