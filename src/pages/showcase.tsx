import React from "react"
import styled from "styled-components"
import SEO from "../components/layout/seo"
import HeaderBackground from "../components/backgrounds/HeaderBackground"
import GlassGradientIntro from "../components/intros/GlassGradientIntro"
import PortfolioSection from "../components/sections/ShowcaseSection"

export default function ShowcasePage() {
  return (
    <Wrapper>
      <HeaderBackground image="../images/blobs/HeaderBlob03.svg" />
      <SEO title="Portfolio" />
      <GlassGradientIntro
        title="Portfolio"
        description="Take a look at all the work we have done"
      />
      <PortfolioSection />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  padding-top: 6rem;
`
