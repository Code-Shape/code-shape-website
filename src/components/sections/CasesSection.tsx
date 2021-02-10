import React from "react"
import { H1, BodyMain } from "../styles/TextStyles"
import styled from "styled-components"
import JuliusCase from "../additionals/CaseJulius"
import BlobBackground01 from "../backgrounds/BlobBackground01"
import BlobBackground02 from "../backgrounds/BlobBackground02"
import StineCase from "../additionals/CaseStine"

export default function CasesSection() {
    return (
      <Wrapper>
        <BlobBackground01 />
        <BlobBackground02 />
        <ContentWrapper>
          <TextWrapper>
            <Title>Cases we have <span className="created">created</span></Title>
            <Description>
              We bring people forward through technology, and learning is the best
              way to introduce insanely cool new things.
            </Description>
          </TextWrapper>
          <JuliusCase />
          <StineCase />
        </ContentWrapper>
      </Wrapper>
    )
  }

const Wrapper = styled.div`
margin-bottom: 300px;
`

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

