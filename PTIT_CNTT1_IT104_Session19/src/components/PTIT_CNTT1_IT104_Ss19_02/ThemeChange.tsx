import React from 'react'
import ThemeProvider from './ThemeProvider'
import Header from './Header'
import Content from './Content'

export default function ThemeChange() {
  return (
    <div>
      <ThemeProvider>
        <Header/>
        <Content/>
      </ThemeProvider>
    </div>
  )
}
