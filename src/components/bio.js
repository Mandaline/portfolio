
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { x } from '@xstyled/styled-components'

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
    >
      {author?.name && (
        <div>
          <p><strong>{author.name}</strong></p>
          <p>{author?.summary || null}</p>
          <a href="https://github.com/Mandaline">
            Github
          </a>
        </div>
      )}
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
    </x.div>
  )
}

export default Bio
