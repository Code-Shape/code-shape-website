import React from "react"
import { H1, BodyMain } from "../styles/TextStyles"
import styled from "styled-components"
import SignUpButton from "../buttons/SignUpButton"

export default function GetInTouchSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>Get in touch</Title>
          <Description>
            Contact us with your ideas, and we will bring them to life. Go ahead
            and start a chat when you are ready.
          </Description>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 6rem 0;
`

const ContentWrapper = styled.div`
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
  max-width: 40rem;
  margin: 0 auto;
  text-align: center;
  padding: 0 1.2rem;
`
