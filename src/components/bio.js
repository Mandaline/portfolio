
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
    margin-left: 13px;
    margin-right: 13px;
    @media (min-width: 640px) {
      margin-left: 0;
      margin-right: 26px;
    }
    &.sc {
      width: 32px;
      height: 32px;
    }
  }
`
const Avatar = styled.div`
  img {
    border-radius: 100%;
  }
  margin-bottom: 20px;
  @media (min-width: 640px) {
    margin-bottom: 0;
  }
`

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          git
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const git = data.site.siteMetadata.git

  return (
    <x.div
      display="flex"
      flexDirection={{_: "column-reverse", sm: "row"}}
      justifyContent="space-between"
      alignItems="center"
      textAlign={{_: "center", sm: "left"}}
      m="35px 0"
    >
      <BioCard>
        <x.div
          display="flex"
          alignItems="center"
          justifyContent={{_: "center", sm: "left"}}
          mb="12px"
        >
          <x.h3
            pb="3px"
            mb="0"
            mr={{_:"10px", sm: "26px"}}
          >
            Hi, I'm  Mandaline
          </x.h3>
          <a href={git} target="_blank" rel="noreferrer noopener">
            <FaGithub />
          </a>
          
        </x.div>
        <x.p
          maxWidth="480px"
          fontSize="18px"
        >
          A web developer having fun with the <a href="https://jamstack.org/" target="_blank" rel="noreferrer noopener">JAMstack</a> and other frontend technologies
        </x.p>
        <x.div
          display="flex"
          mt="25px"
          alignItems="center"
          justifyContent={{_: "center", sm: "left"}}
        >
          <SiReact />
          <SiGatsby />
          <SiNextdotjs />
          <FaWordpress />
          <SiStyledcomponents className="sc"/>
        </x.div>
      </BioCard>
      <Avatar>
        <a href={git} target="_blank" rel="noreferrer noopener">
          <StaticImage
            className="bio-avatar"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/cat-avatar-sm.png"
            width={110}
            height={110}
            quality={95}
            alt="Profile picture"
            placeholder="none"
          />
        </a>
      </Avatar>
    </x.div>
  )
}

export default Bio
