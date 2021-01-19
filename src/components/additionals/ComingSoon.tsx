import React from "react"
import styled from "styled-components"
import { H2, SmallText2 } from "../styles/TextStyles"

export default function ComingSoonPage(props) {
  const { intro, title, description } = props
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Intro>{intro || "The wait will be over soon"}</Intro>
          <Title>{title || "Great things take time"}</Title>
          <Description>
            {description ||
              "Check in again soon to discover more content. In the meantime you are more than welcome to contact us for any questions you might have."}
          </Description>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow: hidden;
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  padding: 200px 30px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
`

const TextWrapper = styled.div`
  max-width: 450px;
  display: grid;
  gap: 30px;
`

const Intro = styled(SmallText2)`
  color: gray;
`

const Title = styled(H2)``

const Description = styled.div``
