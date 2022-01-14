import React from 'react'
import {
  defaultTheme,
  ThemeProvider,
  Preflight,
} from '@xstyled/styled-components'

const theme = {
  ...defaultTheme,
  // Customize your theme here
}

// Wraps every page in a component
export const wrapPageElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      {element}
    </ThemeProvider>
  )
}