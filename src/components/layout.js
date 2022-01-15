import * as React from "react"
import { x } from '@xstyled/styled-components'
import {
  ThemeProvider,
  Preflight,
} from '@xstyled/styled-components'
import { GlobalStyle } from '../theme/global-styles'
import { theme } from '../theme/theme'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <GlobalStyle />
        <x.div
          margin="0 auto"
          maxWidth="850px"
          p="20px"
        >
        <main>{children}</main>
        <x.footer textAlign="center" mt="30px">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </x.footer>
      </x.div>
    </ThemeProvider>
  )
}

export default Layout
