import React from 'react'
// custom typefaces
import "@fontsource/amiko"
import "@fontsource/fira-code"
import {
  ThemeProvider,
  Preflight,
} from '@xstyled/styled-components'
import { GlobalStyle } from './src/theme/global-styles'
import { theme } from './src/theme/theme'

// Wraps every page in a component
export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <GlobalStyle />
      {element}
    </ThemeProvider>
  )
}