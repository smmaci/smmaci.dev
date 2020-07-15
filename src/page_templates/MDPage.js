import React from "react"
import SEO from '../components/seo'
import { Navigation } from '../components/navigation'

import '../components/layout.css'

const MDPage = ({ data }) => {
  const { markdownRemark: post } = data // data.markdownRemark holds your post data
  return (
    <div className="Layout-wrapper">
      <SEO />
      <Navigation />
      <main dangerouslySetInnerHTML={{ __html: post.html }} />
      <footer>
        © {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export const pageQuery = graphql`
  query PageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
      }
    }
  }
`

export default MDPage
