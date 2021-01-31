import React from "react"
import styled from "styled-components"
import SEO from "../components/layout/seo"
import ComingSoon from "../components/additionals/ComingSoon"

function CommunityPage() {
  return (
    <Wrapper>
      <SEO title="Community" />
      <ComingSoon />
    </Wrapper>
  )
}

export default CommunityPage

const Wrapper = styled.div``
