import React from "react"
import { H1, MediumText } from "../styles/TextStyles"
import styled from "styled-components"
import ChatFlowContent from "../additionals/ChatFlowContent"
import ButtonWithAnimation from "../buttons/ButtonWithAnimation"
import BlobAnimation from "../animations/BlobAnimation"

export default function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <BlobAnimation />
        <TextWrapper>
          <Title>Learn how to create great apps</Title>
          <Description>
            We bring people forward through technology, and learning is the best
            way to introduce insanely cool new things.
          </Description>
          <ButtonWithAnimation
            icon="/images/icons/learnLight.svg"
            link="/learn"
          />
        </TextWrapper>
        <ChatFlowContent />
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const ContentWrapper = styled.div`
  max-width: 1234px;
  padding: 100px 30px;
  margin: 0 auto;
`

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`
const Title = styled(H1)``

const Description = styled(MediumText)``
