
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { x, styled } from '@xstyled/styled-components'
import {
  FaGithub,
  FaWordpress
} from 'react-icons/fa';
import {
  SiReact, 
  SiNextdotjs,
  SiGatsby,
  SiStyledcomponents
} from "react-icons/si";

const BioCard = styled.div`
  svg {
    width: 26px;
    height: 26px;
    margin-right: 26px;
  }
`

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  //const social = data.site.siteMetadata?.social

  return (
    <x.div
      display="flex"
      justifyContent="space-between"
      alignItems="flex-end"
      m="35px 0"
    >
      {author?.name && (
        <BioCard>
          <x.div
            display="flex"
            alignItems="center"
          >
            <x.h3 pb="3px" mr="26px">Hi, I'm  Mandaline</x.h3>
            <a href="https://github.com/Mandaline" target="_blank" rel="noreferrer noopener">
              <FaGithub />
            </a>
            
          </x.div>
          <p>A web developer having fun with the <a href="https://jamstack.org/" target="_blank" rel="noreferrer noopener">JAMstack</a> and other frontend technologies</p>
          <x.div
            display="flex"
          >
            <SiReact />
            <SiGatsby />
            <SiNextdotjs />
            <FaWordpress />
            <SiStyledcomponents />
          </x.div>
        </BioCard>
      )}
      <a href="https://github.com/Mandaline" target="_blank" rel="noreferrer noopener">
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic.jpeg"
          width={110}
          height={110}
          quality={95}
          alt="Profile picture"
        />
      </a>
    </x.div>
  )
}

export default Bio
