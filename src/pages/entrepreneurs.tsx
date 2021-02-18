import React from "react"
import styled from "styled-components"
import SEO from "../components/layout/seo"
import HeaderBackground from "../components/backgrounds/HeaderBackground"
import GradientIntro from "../components/intros/GradientIntro"
import CaseSection from "../components/sections/CaseSection"
import ProductSection from "../components/sections/ProductSection"
import GetInTouchSection from "../components/sections/GetInTouchSection"
import CommunicationEntrepreneurs from "../components/sections/CommunicationEntrepreneurs"

export default function EntrepreneursPage() {
  return (
    <Wrapper>
      <HeaderBackground image="../images/blobs/HeaderBlob01.svg" />
      <SEO title="Entrepreneurs" />
      <GradientIntro
        title="When time is of the essence"
        description="We believe that we can create better products for people to enjoy if people come first. To create an excellent experience for you, simplicity and a good communication are our top priorities."
        gradientColor="-webkit-linear-gradient(left, #7230ce, #3E16BB)"
      />
      <CommunicationEntrepreneurs />
      <CaseSection />
      <ProductSection />
      <GetInTouchSection />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-top: 8rem;
`
