import * as React from "react"
import { graphql } from "gatsby"
import Portfolio from "../components/portfolio"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const orderedPosts = posts.sort((a, b) => a.frontmatter.postOrder - b.frontmatter.postOrder)
  
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Bio />
      <Portfolio posts={orderedPosts} />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          postOrder
          about
          description
          postLink
          tags
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 580)
            }
          }
        }
      }
    }
  }
`
