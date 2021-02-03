import React from "react"
import styled from "styled-components"
import SEO from "../components/layout/seo"
import GradientIntro from "../components/additionals/GradientIntro"

export default function CommunityPage() {
  return (
    <Wrapper>
      <SEO title="Community" />
      <GradientIntro
        title="People at it's core"
        description="We believe that we can create better products together. Join our community and make an impact on learning and sharing everyday."
        gradientColor=""
      />
    </Wrapper>
  )
}

const Wrapper = styled.div``
