import React from "react"
import { H1, BodyMain } from "../styles/TextStyles"
import styled from "styled-components"
import JuliusCase from "../additionals/CaseJulius"

export default function CasesSection() {
    return (
      <Wrapper>
          <Blob src="/images/blobs/CasesSectionBlob01.svg"></Blob>
          <Blob2 src="/images/blobs/CasesSectionBlob02.svg"></Blob2>
        <ContentWrapper>
          <TextWrapper>
            <Title>Cases we have <span className="created">created</span></Title>
            <Description>
              We bring people forward through technology, and learning is the best
              way to introduce insanely cool new things.
            </Description>
          </TextWrapper>
          <JuliusCase />
        </ContentWrapper>
      </Wrapper>
    )
  }

const Wrapper = styled.div``

const ContentWrapper = styled.div`
  max-width: 77rem;
  padding: 5rem 1.875rem;
  margin: 0 auto;
`

const TextWrapper = styled.div`
  max-width: 22.5rem;
  display: grid;
  gap: 1.875rem;
  margin-bottom: 6vw;
`
const Title = styled(H1)`
  @media only screen and (max-width: 600px) {
    font-size: 50px;
  }

  .created {
      color: #4518c3;
  }
`

const Description = styled(BodyMain)``

const Blob = styled.img`
  position: absolute;
  right: 0;
  top: 38vw;
  z-index: -1;
`

const Blob2 = styled.img`
  position: absolute;
  right: 0;
  top: 60vw;
  z-index: -2;
`