import React from 'react'
// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
import {
  ThemeProvider,
  Preflight,
} from '@xstyled/styled-components'
import { GlobalStyle } from './src/theme/global-styles'

const theme = {
  
  // Customize your theme here
}

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