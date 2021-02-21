import React from "react"
import styled from "styled-components"
import SEO from "../components/layout/seo"
import HeaderBackground from "../components/backgrounds/HeaderBackground"
import GlassGradientIntro from "../components/intros/GlassGradientIntro"
import CaseSection from "../components/sections/CaseSection"
import ProductSection from "../components/sections/ProductSection"
import GetInTouchSection from "../components/sections/GetInTouchSection"
import CommunicationEntrepreneurs from "../components/sections/CommunicationEntrepreneurs"

export default function EntrepreneursPage() {
  return (
    <Wrapper>
      <HeaderBackground image="../images/blobs/HeaderBlob04.svg" />
      <SEO title="Entrepreneurs" />
      <GlassGradientIntro
        title="When time is of the essence"
        description="We believe that we can create better products for people to enjoy if people come first. To create an excellent experience for you, simplicity and a good communication are our top priorities."
        gradientColor="-webkit-linear-gradient(left, #F89929, #F5217B)"
      />
      <CommunicationEntrepreneurs />
      <CaseSection />
      <ProductSection />
      <GetInTouchSection />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding-top: 6rem;
`
