import * as React from "react"
import { x } from '@xstyled/styled-components'
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <x.div
      margin="0 auto"
      maxWidth="950px"
      p="20px"
    >
      <main>{children}</main>
      <x.footer textAlign="center" mt="20px">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </x.footer>
    </x.div>
  )
}

export default Layout
