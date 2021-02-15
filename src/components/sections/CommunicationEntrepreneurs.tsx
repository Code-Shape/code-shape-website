import React from "react"
import styled from "styled-components"
import QuestionIntro from "../intros/QuestionIntro"

export default function CommunicationEntrepreneurs() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <QuestionIntro />
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const ContentWrapper = styled.div`
  max-width: 60rem;
  padding: 3.125rem auto;
  margin: 0 auto;
  display: grid;
  grid-gap: 1.875rem;
  grid-template-columns: repeat(auto-fit, minmax(22.5rem, 1fr));
`

const TextWrapper = styled.div`
  display: grid;
  grid-gap: 1.875rem;
`
