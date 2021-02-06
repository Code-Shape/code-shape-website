import React from "react"
import styled from "styled-components"
import { H1, BodyMain } from "../components/styles/TextStyles"

export default function CategoryPageTemplate({ pageContext: { category } }) {
  return (
    <Wrapper>
      <HeaderWrapper>
        <TextWrapper>
          <TitleWrapper>{category.title}</TitleWrapper>
          <SubtitleWrapper>{category.subtitle}</SubtitleWrapper>
        </TextWrapper>
      </HeaderWrapper>
    </Wrapper>
  )
}
const Wrapper = styled.div``

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
  padding: 0.2rem;
  font-weight: 900;
  background: -webkit-linear-gradient(left, #7230ce, #3E16BB)};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const SubtitleWrapper = styled(BodyMain)``
