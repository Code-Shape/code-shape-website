import React from "react"
import { H1, BodyMain } from "../styles/TextStyles"
import styled from "styled-components"
import ContactForm from "../additionals/ContactForm"


export default function SignUpSection() {
    return (
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <Title>Sign up</Title>
            <Description>
              Contact us with your ideas, and we will bring them to life.
            </Description>
          </TextWrapper>
        </ContentWrapper>
        <ContactForm />
      </Wrapper>
    )
  }


  const Wrapper = styled.div`
  margin-top: 200px;
  `

  const ContentWrapper = styled.div`
    padding: 5rem 1.875rem;
    margin: 0 auto;
  `
  
  const TextWrapper = styled.div`
    display: grid;
    gap: 1.875rem;
    justify-self: center;
  align-items: center;
  `
  const Title = styled(H1)`
  margin: 0 auto;
  text-align: center;

    @media only screen and (max-width: 600px) {
      font-size: 50px;
    }
  
    .products {
        color: #4518c3;
    }
    `
  
  const Description = styled(BodyMain)`
  margin: 0 auto;
  text-align: center;
  `