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
            <Title>Cases we have <span className="worked">worked</span> on</Title>
            <Description>
              We bring people forward through technology, and learning is the best
              way to introduce insanely cool new things.
            </Description>
          </TextWrapper>
        </ContentWrapper>
        <JuliusCase />
        <StineCase />
      </Wrapper>
    )
  }

const Wrapper = styled.div`
margin: 300px auto 0 auto;
`

const ContentWrapper = styled.div`
  max-width: 77rem;
  margin: 0 auto;
  display: grid;
  grid-gap: 1.875rem;
`

const TextWrapper = styled.div`
display: grid;
gap: 1.25rem;
justify-self: center;
align-items: center;
max-width: 37.5rem;
`

const Title = styled(H1)`
text-align: center;
  @media only screen and (max-width: 600px) {
    font-size: 50px;
  }

  .worked {
      color: #4518c3;
  }
`

const Description = styled(BodyMain)``
