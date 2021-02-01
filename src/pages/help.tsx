import React from "react"
import styled from "styled-components"
import SEO from "../components/layout/seo"
import ComingSoon from "../components/additionals/ComingSoon"

function HelpPage() {
  return (
    <Wrapper>
      <SEO title="Help" />
      <ComingSoon />
    </Wrapper>
  )
}

export default HelpPage

const Wrapper = styled.div``
