import React from "react"
import styled from "styled-components"
import { BodyMain, H3 } from "../styles/TextStyles"
import { StyledIcon } from "@styled-icons/styled-icon"

export default function UpdateCard(props) {
  const { iconImage, title, text, titleColor } = props
  return (
    <Wrapper>
      <ContentWrapper>
        <ImageWrapper className="iconWrapper">
          <IconImage
            className="icon"
            src={iconImage || "/images/profiles/logo.png"}
          />
        </ImageWrapper>
        <TextWrapper>
          <Title titleColor={titleColor}>{title || "codeshape"}</Title>
          <Text>{text || "Code Shape"}</Text>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const ContentWrapper = styled.div`
  display: grid;
  grid-gap: 1.875rem;
  padding: 1.2rem;
  justify-content: center;
  align-self: center;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 1.25rem;

  @supports (backdrop-filter: blur(10px)) or
    (-webkit-backdrop-filter: blur(10px)) {
    opacity: 0, 0.15;
    background-color: transparent;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }

  @-moz-document url-prefix() {
    background-color: rgba(255, 255, 255, 0.1);
    @media (prefers-color-scheme: dark) {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  *,
  & {
    transition: 0.1s ease-in;
  }
  @media only screen and (min-width: 600px) {
  :hover {
      transform: scale(1.1);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 30px 60px rgba(23, 0, 102, 0.5),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  z-index: 1;
     
  .iconWrapper {
    filter: hue-rotate(10deg) brightness(110%) saturate(120%);
    transform: perspective(200px) scale(1.1);
  }

  .icon {
      transform: scale(1.2);

    }
  }

`

const ImageWrapper = styled.div`
  margin: 0 auto;
  border-radius: 50%;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
`

const IconImage = styled.img`
  width: 100px;
  padding: 1rem;
`

const TextWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  text-align: center;
  padding: 0 1rem;
`

const Title = styled(H3)`
  font-weight: 900;
  color: ${props => props.titleColor || "turquoise"};
`

const Text = styled(BodyMain)``
