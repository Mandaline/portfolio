import { x, styled } from '@xstyled/styled-components'
import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Tags from "./tags"

const CardImage = styled.div`
  max-width: 330px;
  .gatsby-image-wrapper {
    height: 360px;
    border-radius: 8px;
  }
`
const Portfolio = ({ posts }) => {
  return (
    <x.div
      display="flex"
      flexWrap="wrap" 
      justifyContent="space-between"
      gap="20px"
    >
      {posts.map(post => {
        const image = getImage(post.frontmatter.featuredImage)
        const title = post.frontmatter.title
        const link = post.frontmatter?.postLink
        const tags = post.frontmatter.tags
console.log(tags)
        return (
          <x.div
            p="10px"
            borderRadius="8px"
            display="flex"
            w="100%"
            boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
          >
            <CardImage>
              <GatsbyImage image={image} alt="" />
            </CardImage>
            <x.div
              p="0 30px"
              w="70%"
            >
              {tags.length && <Tags tags={tags} />}
              <x.h1>{title}</x.h1>
              <a href={link} target="_blank" rel="noreferrer noopener">
                <x.div
                  p="5px 18px"
                  display="inline-block"
                  borderRadius="6px"
                  color="white"
                  fontSize="13px"
                  fontWeight="700"
                  fontFamily="sans-serif"
                  backgroundColor="#d043e0"
                  letterSpacing="1px"
                >
                  Visit Site
                </x.div>
              </a>
            </x.div>
          </x.div>
        )
      })}
    </x.div>
  )
}

export default Portfolio