import type { AppProps } from 'next/app'
import React from 'react'
import '@/styles/global.css'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import { darkTheme, lightTheme } from '@/utils/theme'
import Layout from '@/layout/index'
import { ThemeContext } from '@/contexts/theme'

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<string>('dark')
  const isDarkTheme = theme === 'dark'

  const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark')

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <ThemeContext.Provider value={{ toggleTheme, isDarkTheme }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}
