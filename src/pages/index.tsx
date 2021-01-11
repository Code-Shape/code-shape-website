import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <Helmet>
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/8205013.js"
        ></script>
      </Helmet>
    </Layout>
  )
}

export default IndexPage
