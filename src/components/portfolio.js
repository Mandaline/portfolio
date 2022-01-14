import { x } from '@xstyled/styled-components'
import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Portfolio = ({ posts }) => {
  return (
    <x.div display="flex">
      {posts.map(post => {
        const image = getImage(post.frontmatter.featuredImage)
        const title = post.frontmatter.title
        const link = post.frontmatter?.postLink

        return (
          <x.div>
            <a href={link}>
            <x.div width="400px">
              <GatsbyImage image={image} alt="" />
            </x.div>
            <x.h1>{title}</x.h1>
            </a>
          </x.div>
        )
      })}
    </x.div>
  )
}

export default Portfolio