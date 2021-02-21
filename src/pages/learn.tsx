import React from "react"
import styled from "styled-components"
import SEO from "../components/layout/seo"
import GlassGradientIntro from "../components/intros/GlassGradientIntro"
import HeaderBackground from "../components/backgrounds/HeaderBackground"

function LearnPage() {
  return (
    <Wrapper>
      <HeaderBackground image="../images/blobs/HeaderBlob01.svg" />
      <SEO title="Learn" />
      <GlassGradientIntro
        title="Learning is part of life"
        description="Keep practice every day, and you will be able to accomplish amazing things in life. It's never too late to start learning a new skill."
        gradientColor="-webkit-linear-gradient(left, #F89929, #F5217B)"
      />
    </Wrapper>
  )
}

export default LearnPage

const Wrapper = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding-top: 6rem;
`
