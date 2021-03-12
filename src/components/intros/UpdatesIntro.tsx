import React from "react"
import styled from "styled-components"
import { H1, H3, BodyMain } from "../styles/TextStyles"

export default function UpdatesIntro(props) {
  const { title, subheader, description, gradientColor } = props
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title gradientColor={gradientColor}>
            {title || "Create with Code"}
          </Title>
          <SubHeader>
            {subheader || "Code Shape"}
          </SubHeader>
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
  max-width: 40rem;
  margin: 15rem 0rem 0rem 10vw;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-gap: 1.875rem;
  padding: 1.875rem;
  margin: 1.875rem;
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
    "-webkit-linear-gradient(left, #f89b29, #ff489a)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const SubHeader = styled(H3)`
color: #a255ff;
`

const Description = styled(BodyMain)`
  margin: 0 auto;
`
