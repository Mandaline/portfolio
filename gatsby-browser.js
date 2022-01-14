import React from 'react'
// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
import {
  defaultTheme,
  ThemeProvider,
  Preflight,
} from '@xstyled/styled-components'
// normalize CSS across browsers
//import "./src/normalize.css"
// custom CSS styles
//import "./src/style.css"

// Highlighting for code blocks
//import "prismjs/themes/prism.css"

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