import React from "react"
import { H1, BodyMain } from "../styles/TextStyles"
import styled from "styled-components"
import ClientProject from "../additionals/ClientProject"

export default function CasesSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Cases we <span className="worked">worked</span> on
          </Title>
          <Description>
            A selection of projects we have worked on.
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
  margin: 200px auto 100px auto;
  padding: 2.5rem 1.875rem;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-gap: 3rem;
`

const TextWrapper = styled.div`
  display: grid;
  gap: 1.875rem;
  justify-self: center;
  align-items: center;
`

const Title = styled(H1)`
  text-align: center;
  .worked {
    color: #4518c3;
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
`
