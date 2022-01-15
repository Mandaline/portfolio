import { x, styled } from '@xstyled/styled-components'
import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Tags from "./tags"

const CardImage = styled.div`
  max-width: 100%;
  .gatsby-image-wrapper {
    height: 320px;
    border-radius: 8px;
  }
  @media (min-width: 640px) {
    max-width: 290px;
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
        const { title, postLink, tags, about } = post.frontmatter
        const image = getImage(post.frontmatter.featuredImage)

        return (
          <x.div
            key={title}
            p="10px"
            borderRadius="8px"
            display="flex"
            flexDirection={{_: "column", sm: "row"}}
            w="100%"
            boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
          >
            <CardImage>
              <GatsbyImage image={image} alt="" />
            </CardImage>
            <x.div
              p={{_: "0 20px 20px", sm: "0 30px"}}
              w={{_: "100%", md: "70%"}}
              textAlign={{_: "center", sm: "left"}}
            >
              {tags.length && <Tags tags={tags} />}
              <x.h1>{title}</x.h1>
              <x.p fontFamily="heading">{about}</x.p>
              <a href={postLink} target="_blank" rel="noreferrer noopener">
                <x.div
                  p="6px 18px 4px"
                  mt="30px"
                  display="inline-block"
                  borderRadius="6px"
                  color="white"
                  fontSize="13px"
                  fontWeight="700"
                  fontFamily="heading"
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