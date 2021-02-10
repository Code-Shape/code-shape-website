import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import SEO from "../components/layout/seo"
import { H1, BodyIntro, MediumText } from "../components/styles/TextStyles"

function NotFoundPage() {
  return (
    <Wrapper>
      <SEO title="404: Page not found" />
      <ContentWrapper>
        <Title>Page not found</Title>
        <Subtitle>
          Sorry 😔 — we couldn’t find what you were looking for.
        </Subtitle>
        <Question>Need help finding something?</Question>
        <Contact>
          Start a chat in the lower right corner and we’ll help you.
        </Contact>
      </ContentWrapper>
      <Helmet>
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/8205013.js"
        ></script>
      </Helmet>
    </Wrapper>
  )
}

export default NotFoundPage

const Wrapper = styled.div`
  margin: 1.2rem;
`

const ContentWrapper = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  margin: 0 auto;
  max-width: 60rem;
  display: grid;
  grid-gap: 1.2rem;
`

const Title = styled(H1)``

const Subtitle = styled(BodyIntro)``

const Question = styled(MediumText)`
  font-weight: bold;
`

const Contact = styled(MediumText)``
