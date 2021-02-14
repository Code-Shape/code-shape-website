import React from "react"
import GradientIntro from "../components/additionals/GradientIntro"
import styled from "styled-components"
import SEO from "../components/layout/seo"
import CommunicationBusiness from "../components/sections/CommunicationBusiness"
import CasesSection from "../components/sections/CasesSection"
import ProductSection from "../components/sections/ProductSection"
import SignUpSection from "../components/sections/SignUpSection"

export default function BusinessPage() {
  return (
    <Wrapper>
      <SEO title="Entrepreneurs" />
      <GradientIntro
        title="When time is of the essence"
        description="We believe that we can create better products for people to enjoy if people come first. To create an excellent experience for you, simplicity and a good communication are our top priorities."
        gradientColor="-webkit-linear-gradient(left, #7230ce, #3E16BB)"
      />
      <CommunicationBusiness />
      <CasesSection />
      <ProductSection />
      <SignUpSection />
    </Wrapper>
  )
}

const Wrapper = styled.div``
