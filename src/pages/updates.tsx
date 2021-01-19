import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import ComingSoon from "../components/additionals/ComingSoon"

function UpdatesPage() {
  return (
    <Layout>
      <SEO title="Updates" />
      <ComingSoon />
    </Layout>
  )
}

export default UpdatesPage
