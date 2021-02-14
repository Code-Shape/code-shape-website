import React from "react"
import { H1, BodyMain } from "../styles/TextStyles"
import styled from "styled-components"
import ClientProject from "../additionals/ClientProject"
import BlobBackground01 from "../backgrounds/BlobBackground01"
import BlobBackground02 from "../backgrounds/BlobBackground02"

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
        <ClientProject  
        title="juliusmygind.dk" 
        clientImage="/images/cases/juliusCaseImg07.jpg" 
        link="https://juliusmygind.dk"
        titleColor="#f51d7e" 
        backgroundImage="/images/cases/juliusCaseImg06.png" 
        logoImage="/images/cases/juliusCaseImg04.png"
        />
        <ClientProject  
        title="oym.dk" 
        clientImage="/images/cases/stineCaseImg01.jpg"
        link="https://oym.dk"
        titleColor="#f51d7e" 
        backgroundImage="/images/cases/stineCaseImg02.png" 
        logoImage="/images/cases/stineCaseImg04.png"
        />
      </Wrapper>
    )
  }

const Wrapper = styled.div`

`

const ContentWrapper = styled.div`
  
`

const TextWrapper = styled.div`

`

const Title = styled(H1)`

`

const Description = styled(BodyMain)``
