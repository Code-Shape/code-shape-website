import React from "react"
import styled from "styled-components"
import SEO from "../components/layout/seo"
import ComingSoon from "../components/additionals/ComingSoon"
import HeaderBackgrounds from "../components/backgrounds/HeaderBackgrounds"

function LearnPage() {
  return (
    <Wrapper>
      <HeaderBackgrounds image="../images/blobs/HeaderBlob02.svg" />
      <SEO title="Learn" />
      <ComingSoon />
    </Wrapper>
  )
}

export default LearnPage

const Wrapper = styled.div``
