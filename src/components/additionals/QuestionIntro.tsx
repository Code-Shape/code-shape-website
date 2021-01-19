import React from "react"
import styled from "styled-components"
import { BodyMain, H3 } from "../styles/TextStyles"

export default function QuestionIntro(props) {
  const { title, description, gradientColor } = props
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            No <span className="time">time</span> to learn?
          </Title>
          <Title2>
            No time to do it <span className="yourself">yourself</span>?
          </Title2>
          <Description>
            We focus our energy on creating the apps and websites for you, so
            you can focus on what you do best. You have a say in everything and
            you have a constant overview from start to finish.
          </Description>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 1.875rem;
  border-radius: 20px;
  border: 0px;
  display: grid;
  max-width: 22rem;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

  @supports (backdrop-filter: blur(40px)) or
    (-webkit-backdrop-filter: blur(40px)) {
    opacity: 0, 5;
    background-color: transparent;
    -webkit-backdrop-filter: blur(40px);
    backdrop-filter: blur(40px);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  @-moz-document url-prefix() {
    background-color: rgba(242, 242, 242, 0.7);
    @media (prefers-color-scheme: dark) {
      background-color: rgba(50, 50, 52, 0.7);
    }
  }
`

const ContentWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-gap: 1.875rem;
`

const TextWrapper = styled.div`
  display: grid;
  gap: 1.25rem;
  justify-self: center;
  align-items: center;
`

const Title = styled(H3)`
  text-align: left;

  .time {
    color: #4518c3;
  }

  .yourself {
    color: #ff006f;
  }
`

const Title2 = styled(H3)`
  text-align: left;

  .yourself {
    color: #ff006f;
  }
`

const Description = styled(BodyMain)``
