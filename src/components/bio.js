
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
    &.sc {
      width: 32px;
      height: 32px;
    }
  }
`
const Avatar = styled.div`
  .bio-avatar {
    border-radius: 100%100%;
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
      alignItems="center"
      m="35px 0"
    >
      {author?.name && (
        <BioCard>
          <x.div
            display="flex"
            alignItems="center"
            mb="12px"
          >
            <x.h3 pb="3px" mb="0" mr="26px">Hi, I'm  Mandaline</x.h3>
            <a href="https://github.com/Mandaline" target="_blank" rel="noreferrer noopener">
              <FaGithub />
            </a>
            
          </x.div>
          <p>A web developer having fun with the <a href="https://jamstack.org/" target="_blank" rel="noreferrer noopener">JAMstack</a> and other frontend technologies</p>
          <x.div
            display="flex"
            mt="25px"
            alignItems="center"
          >
            <SiReact />
            <SiGatsby />
            <SiNextdotjs />
            <FaWordpress />
            <SiStyledcomponents className="sc"/>
          </x.div>
        </BioCard>
      )}
      <Avatar>
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
      </Avatar>
    </x.div>
  )
}

export default Bio
