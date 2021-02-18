import React from "react"
import styled from "styled-components"
import GradientIntro from "../intros/GradientIntro"
import GlassCard from "../cards/GlassCard"
import IntroText from "../intros/IntroText"

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
          <GlassCard
            title="Learners"
            titleColor="#FF9204"
            text="It is never too late to start coding and change your career. Start in your own pace but be consistant. Get started with learning."
            image="images/icons/learner02_dm.svg"
            link="/learn"
            borderColor=""
            backgroundColor="#FF9204"
          />
          <GlassCard
            title="Supporters"
            titleColor="#FF3C88"
            text="Enhance your already existing knowledge and learn new features while helpings others. Get started with the community."
            image="images/icons/community_light.svg"
            link="/community"
            borderColor=""
            backgroundColor="#FF3C88"
          />
          <GlassCard
            title="Entrepreneurs"
            titleColor="#B53EFF"
            text="Don’t have time to do it yourself? No problem we will help you out so you can spend the time on what matters."
            image="images/icons/business02_light.svg"
            link="/entrepreneurs"
            borderColor=""
            backgroundColor="#B53EFF"
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
  /* padding: 3.125rem auto; */
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
