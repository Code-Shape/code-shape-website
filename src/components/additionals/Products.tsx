import React from "react"
import styled from "styled-components"
import { BodyMain } from "../styles/TextStyles"

export default function Products(props) {
  const {
    iconImage,
    title,
    text,
    titleColor,
  } = props
  return (
      <Wrapper>
        <ContentWrapper>
            <ImageWrapper>
              <IconImage className="icon" src={iconImage || "/images/profiles/logo.png"} />
            </ImageWrapper>
            <TextWrapper>
              <Title titleColor={titleColor}>{title || "codeshape"}</Title>
              <Text>
            {text || "Code Shape"}
          </Text>
            </TextWrapper>
        </ContentWrapper>
      </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;  
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  max-width: 25rem; 
  padding: 1.875rem;
  background: rgba(255,255,255,.15);
  border-radius: 1.25rem;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

  @supports (backdrop-filter: blur(10px)) or
    (-webkit-backdrop-filter: blur(10px)) {
    opacity: 0, 5;
    background-color: transparent;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }

  @-moz-document url-prefix() {
    background-color: rgba(255, 255, 255, 0.15);
    @media (prefers-color-scheme: dark) {
      background-color: rgba(50, 50, 52, 0.7);
    }
  }
`

const ImageWrapper = styled.div`
  margin: 0 auto;
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  padding: 1rem;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
`

const IconImage = styled.img`
  width: 150px;
`

const TextWrapper = styled.div`
`

const Title = styled(BodyMain)`
  font-weight: 900;
  color: ${props => props.titleColor || "turquoise"};
  text-align: center;
  line-height: 3em;
`

const Text = styled(BodyMain)`
  text-align: center;
`
