import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import ComingSoonPage from "../components/additionals/ComingSoonPage"

function ArticlesPage() {
  return (
    <Layout>
      <SEO title="Articles" />
      <ComingSoonPage />
    </Layout>
  )
}

export default ArticlesPage
