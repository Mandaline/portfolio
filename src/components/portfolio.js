import { x } from '@xstyled/styled-components'
import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Portfolio = ({ posts }) => {
  return (
    <x.div display="flex">
      {posts.map(post => {
        const image = getImage(post.frontmatter.featuredImage)
        const title = post.frontmatter.title
        console.log(post)
        return (
          <x.div>
            <x.div width="300px">
              <GatsbyImage image={image} alt="" />
            </x.div>
            <x.h1>{title}</x.h1>
            
          </x.div>
        )
      })}
    </x.div>
  )
}

export default Portfolio