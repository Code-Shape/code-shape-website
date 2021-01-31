import React from "react"
import styled from "styled-components"
import SEO from "../components/layout/seo"
import ComingSoon from "../components/additionals/ComingSoon"

function LearnPage() {
  return (
    <Wrapper>
      <SEO title="Learn" />
      <ComingSoon />
    </Wrapper>
  )
}

export default LearnPage

const Wrapper = styled.div``
