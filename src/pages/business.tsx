import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import ComingSoon from "../components/additionals/ComingSoon"

function BusinessPage() {
  return (
    <Layout>
      <SEO title="Business" />
      <ComingSoon />
    </Layout>
  )
}

export default BusinessPage
