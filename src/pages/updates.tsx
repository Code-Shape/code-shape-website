import React from "react"
import styled from "styled-components"
import SEO from "../components/layout/seo"
import ComingSoon from "../components/additionals/ComingSoon"

function UpdatesPage() {
  return (
    <Wrapper>
      <SEO title="Updates" />
      <ComingSoon />
    </Wrapper>
  )
}

export default UpdatesPage

const Wrapper = styled.div``
