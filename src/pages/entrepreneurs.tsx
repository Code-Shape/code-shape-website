import React from "react"
import styled from "styled-components"
import SEO from "../components/layout/seo"
import HeaderBackgrounds from "../components/backgrounds/HeaderBackgrounds"
import GradientIntro from "../components/intros/GradientIntro"
import CaseSection from "../components/sections/CaseSection"
import ProductSection from "../components/sections/ProductSection"
import GetInTouchSection from "../components/sections/GetInTouchSection"
import CommunicationEntrepreneurs from "../components/sections/CommunicationEntrepreneurs"

export default function EntrepreneursPage() {
  return (
    <Wrapper>
      <HeaderBackgrounds image="../images/blobs/HeaderBlob01.svg" />
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
  /* background-image: url(/images/blobs/CasesSectionBlob02.svg),
    url(/images/blobs/CasesSectionBlob03.svg),
    url(/images/blobs/CasesSectionBlob01.svg);
  background-attachment: local;
  background-repeat: no-repeat;
  background-size: 3000px 1500px;
  background-position: top, center, bottom;

  @media only screen and (min-width: 3000px) {
    background-size: 5200px 2000px;
  } */
`
