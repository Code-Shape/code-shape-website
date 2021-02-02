import React from "react"
import { H1, BodyMain } from "../styles/TextStyles"
import styled from "styled-components"
import ChatFlowContent from "../additionals/ChatFlowContent"
import ButtonWithAnimation from "../buttons/ButtonWithAnimation"
import BlobAnimation from "../animations/BlobAnimation"

export default function HeroSection() {
  return (
    <Wrapper>
      <Blob src="/images/blobs/HeroSectionBlob.svg"></Blob>
      <BlobAnimation />
      <ContentWrapper>
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
  max-width: 77rem;
  padding: 5rem 1.875rem;
  margin: 0 auto;
`

const TextWrapper = styled.div`
  max-width: 22.5rem;
  display: grid;
  gap: 1.875rem;
`
const Title = styled(H1)`
  @media only screen and (max-width: 600px) {
    font-size: 50px;
  }
`

const Description = styled(BodyMain)``

const Blob = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  max-width: 70%;
  z-index: -1;
`
