import React from "react"
import { H1, BodyMain } from "../styles/TextStyles"
import styled from "styled-components"
import ClientProject from "../additionals/ClientProject"
import BlobBackground from "../backgrounds/BlobBackground"

export default function CaseSection() {
  return (
    <Wrapper>
      <BlobBackground image="../images/blobs/BackgroundBlob02.svg" />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Cases we <span className="worked">worked</span> on
          </Title>
          <Description>
            We want to bring people forward through technology. Have a look at
            the projects we have worked on.
          </Description>
        </TextWrapper>
        <CaseWrapper>
          <ClientProject
            title="juliusmygind.dk"
            clientImage="/images/cases/juliusCaseImg07.jpg"
            link="https://juliusmygind.dk"
            titleColor="#FF951E"
            backgroundImage="/images/cases/juliusCaseImg06.png"
            logoImage="/images/cases/juliusCaseImg04.png"
          />
          <ClientProject
            title="oym.dk"
            clientImage="/images/cases/stineCaseImg01.jpg"
            link="https://oym.dk"
            titleColor="#646757"
            backgroundImage="/images/cases/stineCaseImg02.png"
            logoImage="/images/cases/stineCaseImg04.png"
          />
        </CaseWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-gap: 1.875rem;
`

const TextWrapper = styled.div`
  display: grid;
  gap: 1.875rem;
  justify-self: center;
  align-items: center;
  padding: 0 1.2rem;
`

const Title = styled(H1)`
  text-align: center;
  .worked {
    color: #ff8c00;
  }
`

const Description = styled(BodyMain)`
  margin: 0 auto;
  text-align: center;
  max-width: 40rem;
`

const CaseWrapper = styled.div`
  display: grid;
  grid-gap: 3rem;
  padding: 1.2rem;
`
