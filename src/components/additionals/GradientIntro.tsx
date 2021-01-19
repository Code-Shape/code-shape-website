import React from "react"
import styled from "styled-components"
import { H1, BodyMain } from "../styles/TextStyles"

export default function GradientIntro(props) {
  const { title, description } = props
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>{title || "Create with Code"}</Title>
        <Description>
          {description ||
            "People worldwide come here to learn more about how to create amazing things that change the way we interact with each other. We look forward to seeing what you can make!"}
        </Description>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 50px 10px;
`

const ContentWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  grid-gap: 30px;
`

const Title = styled(H1)`
  margin: 0 auto;
  text-align: center;
  background: -webkit-linear-gradient(left, #f89b29, #ff489a, #a255ff, #3a13b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Description = styled(BodyMain)`
  margin: 0 auto;
  text-align: center;
`
