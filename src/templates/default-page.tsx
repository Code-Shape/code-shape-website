import React from "react"
import styled from "styled-components"
import { H1, BodyMain } from "../components/styles/TextStyles"
import { MDXRenderer } from "gatsby-plugin-mdx"
import HeaderBackground from "../components/backgrounds/HeaderBackground"

export default function DefaultPageTemplate({ pageContext: { page } }) {
  return (
    <Wrapper>
      <HeaderBackground image="../images/blobs/HeaderBlob06.svg" />
      <HeaderWrapper>
        <TextWrapper>
          <TitleWrapper>{page.title}</TitleWrapper>
          <SubtitleWrapper>{page.subtitle}</SubtitleWrapper>
        </TextWrapper>
      </HeaderWrapper>
      <ContentWrapper>
        <MDXRenderer>{page.content.markdownNode.childMdx.body}</MDXRenderer>
      </ContentWrapper>
    </Wrapper>
  )
}
const Wrapper = styled.div`
margin 6rem auto;
`

const HeaderWrapper = styled.div`
  min-height: 250px;
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 30px;
`

const TextWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  text-align: center;
`

const TitleWrapper = styled(H1)`
  padding: 0.6rem;
  font-weight: 900;
  background: -webkit-linear-gradient(left, #7230ce, #3E16BB)};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const SubtitleWrapper = styled(BodyMain)``

const ContentWrapper = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
`
