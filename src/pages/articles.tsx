import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import ComingSoon from "../components/additionals/ComingSoon"

function ArticlesPage() {
  return (
    <Layout>
      <SEO title="Articles" />
      <ComingSoon />
    </Layout>
  )
}

export default ArticlesPage
