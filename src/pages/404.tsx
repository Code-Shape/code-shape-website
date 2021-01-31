import React from "react"
import styled from "styled-components"
import SEO from "../components/layout/seo"

function NotFoundPage() {
  return (
    <Wrapper>
      <SEO title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Wrapper>
  )
}

export default NotFoundPage

const Wrapper = styled.div``
