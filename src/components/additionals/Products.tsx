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
  position: relative;
  max-width: 25rem;

  @media only screen and (max-width: 900px) {
    width: 25rem;
  }

    *,
    & {
      transition: .3s ease-in;
    }

    @media only screen and (min-width: 600px) {
        :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translate3d(30px, -3px, 0px) scale(1.1);
    z-index: 1;

    .icon {
      transform: perspective(200px) scale(1.3) rotate3d(0,1,0, 45deg) translate3d(15px,0,0);
      transition-delay: .06s;
    }
  }
}
`

const ContentWrapper = styled.div`
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
height: 200px;
width: 200px;
margin: 0 auto;
position: relative;  
border-radius: 50%;
display: grid;
  justify-content: center;
  align-content: center;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
`

const IconImage = styled.img`
  width: 150px;
  position: relative;
`

const TextWrapper = styled.div`
`

const Title = styled(BodyMain)`
  font-weight: 900;
  color: ${props => props.titleColor || "turquoise"};
  text-align: center;
  line-height: 3em;

  @media only screen and (min-width: 1200px) {
    font-size: 1.8vw;
  }

  @media only screen and (max-width: 600px) {
    font-size: 5vw;
  }
`

const Text = styled(BodyMain)`
@media only screen and (min-width: 1200px) {
    font-size: 1.2vw;
  }


  @media only screen and (max-width: 600px) {
    font-size: 3vw;
  }
  text-align: center;
`
