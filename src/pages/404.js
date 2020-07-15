import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404 Not Found</h1>
    <p>This route doesn't exist. Why are you here?</p>
  </Layout>
)

export default NotFoundPage
