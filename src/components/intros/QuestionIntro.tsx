import React from "react"
import styled from "styled-components"
import { BodyMain, H3 } from "../styles/TextStyles"

//props are not fully implemented yet. Future improvements
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
  position: relative;
  margin: auto 1.875rem;
  padding: 1.875rem;
  display: grid;
  max-width: 35rem;
  justify-content: center;
  align-content: center;
  justify-self: center;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-gap: 1.875rem;
`

const TextWrapper = styled.div`
  display: grid;
  gap: 1rem;
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
