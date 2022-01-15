import { createGlobalStyle, th } from '@xstyled/styled-components'



export const GlobalStyle = createGlobalStyle`
  body {
    color: #333;
    line-height: 1.5em;
    letter-spacing: -.4px;
    font-family: body;
   
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.35em;
    margin-top: .3em;
    margin-bottom: .7em;
    font-family: heading;
  }
  h1 {
    font-size: 30px;
  }
  h3 {
    font-size: 23px;
  }
  a {
    color: bright;
    text-decoration: none;
  }
`