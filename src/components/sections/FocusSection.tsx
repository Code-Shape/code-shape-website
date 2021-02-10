import React from "react"
import styled from "styled-components"
import GradientIntro from "../additionals/GradientIntro"
import GlassCards from "../additionals/GlassCards"
import IntroText from "../additionals/IntroText"

export default function FocusSection() {
  return (
    <Wrapper>
      <GradientIntro />
      <ContentWrapper>
        <TextWrapper>
          <IntroText
            intro="Do you have the time right now?"
            title="Focus on what matters the most"
            description="Many people start their projects thinking it might not take up their time, but it does that in reality. So take your time learning, and you will experience great things. If you don't have the time right now, we will be more than happy to help you with your project!"
          />
        </TextWrapper>
        <CardWrapper>
          <GlassCards
            title="Learners"
            titleColor="#FF9204"
            text="It is never too late to start coding and change your career. Start in your own pace but be consistant."
            image="images/icons/book.svg"
            link="/learn"
            borderColor=""
          />
          <GlassCards
            title="Supporters"
            titleColor="#F9006F"
            text="Enhance your already existing knowledge of programming and learn new features. "
            image="images/icons/learn.svg"
            link="/learn"
            borderColor=""
          />
          <GlassCards
            title="Entrepreneurs"
            titleColor="#B53EFF"
            text="Don’t have time to do it yourself? No problem we will help you out so you can spend the time on what matters."
            image="images/icons/business.svg"
            link="/entrepreneurs"
            borderColor=""
          />
        </CardWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 1rem auto;
`

const ContentWrapper = styled.div`
  max-width: 60rem;
  padding: 3.125rem auto;
  margin: 0 auto;
  display: grid;
  grid-gap: 1.875rem;
  grid-template-columns: repeat(auto-fit, minmax(22.5rem, 1fr));
`

const TextWrapper = styled.div`
  display: grid;
  grid-gap: 1.875rem;
`

const CardWrapper = styled.div`
  display: grid;
  grid-gap: 1.875rem;
  justify-content: center;
  align-items: center;
`
