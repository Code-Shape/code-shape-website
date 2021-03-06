import React from "react"
import styled from "styled-components"
import { H1, BodyMain } from "../styles/TextStyles"

export default function GradientIntro(props) {
  const { title, description, gradientColor } = props
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title gradientColor={gradientColor}>
            {title || "Create with Code"}
          </Title>
          <Description>
            {description ||
              "People worldwide come here to learn more about how to create amazing things that change the way we interact with each other. We look forward to seeing what you can make!"}
          </Description>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 3rem 1.875rem;
`

const ContentWrapper = styled.div`
  max-width: 37.5rem;
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

const Title = styled(H1)`
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
  background: ${props =>
    props.gradientColor ||
    "-webkit-linear-gradient(left, #f89b29, #ff489a, #a255ff, #3a13b8)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Description = styled(BodyMain)`
  margin: 0 auto;
  text-align: center;
`
