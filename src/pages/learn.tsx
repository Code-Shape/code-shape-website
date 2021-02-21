import React from "react"
import styled from "styled-components"
import SEO from "../components/layout/seo"
import ComingSoon from "../components/additionals/ComingSoon"
import HeaderBackground from "../components/backgrounds/HeaderBackground"

function LearnPage() {
  return (
    <Wrapper>
      <HeaderBackground image="../images/blobs/HeaderBlob01.svg" />
      <SEO title="Learn" />
      <ComingSoon />
    </Wrapper>
  )
}

export default LearnPage

const Wrapper = styled.div`
  max-width: 70rem;
  padding-top: 8rem 1.875rem;
`
