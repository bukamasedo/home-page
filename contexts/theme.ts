import { createContext } from 'react'

export const ThemeContext = createContext(
  {} as {
    toggleTheme: any
    isDarkTheme: boolean
  }
)
