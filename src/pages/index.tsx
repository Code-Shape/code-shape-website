import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import SEO from "../components/layout/seo"
import FocusSection from "../components/sections/FocusSection"
import HeroSection from "../components/sections/HeroSection"

function IndexPage() {
  return (
    <Wrapper>
      <SEO title="Home" />
      <HeroSection />
      <FocusSection />
      <Helmet>
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/8205013.js"
        ></script>
      </Helmet>
    </Wrapper>
  )
}

export default IndexPage

const Wrapper = styled.div``
