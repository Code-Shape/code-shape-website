import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { BodyMain, MediumText } from "../styles/TextStyles"

export default function ClientProject(props) {
  const { title, clientImage, link, titleColor, backgroundImage, logoImage } = props
  return (
    <Link to={link || "/"}>
      <Wrapper>
        <ContentWrapper>
          <ClientWrapper>
            <ImageWrapper>
              <ClientImage
                src={clientImage || "/images/profiles/logo.png"}
              />
            </ImageWrapper>
            <TextWrapper>
              <Title titleColor={titleColor}>{title || "codeshape"}</Title>
            </TextWrapper>
          </ClientWrapper>
          <BackgroundWrapper>
            <BackgroundImage src={backgroundImage || "/images/profiles/logo.png"} />
          </BackgroundWrapper>
          <LogoWrapper>
            <LogoImage src={logoImage || "/images/profiles/logo.png"} />
          </LogoWrapper>
        </ContentWrapper>
      </Wrapper>
      </Link>
  )
}

const Wrapper = styled.div`
max-width: 60rem;
margin: 0 auto;
`

{/*
  *,
  & {
    transition: 0.3s ease-in;
  }
`

:hover {
    transform: perspective(600px) translateZ(80px);
    
    .CaseOne {
      transform: perspective(900px) translate3d(-50px, -25px, 25px)
        rotate3d(0, 1, 0, 30deg);
      transition-delay: 0.01s;
    }
    .CaseTwo {
      transform: perspective(900px) translate3d(50px, 25px, 25px)
        rotate3d(-1, 1, 0, -20deg);
      transition-delay: 0.06s;
    }
    .CaseThree {
      transform: perspective(900px) translate3d(50px, -25px, 25px)
        rotate3d(1, 1, 0, -20deg);
      transition-delay: 0.1s;
    }
    .CaseFour {
      box-shadow: 10px 10px 30px #242424;
    }
  }*/}


const ContentWrapper = styled.div`

`

const ClientWrapper = styled.div`
display: grid;
grid-template-columns: auto auto;
align-content: center;
padding: .5rem;
  border-radius: 1.25rem;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  max-width: 30rem;
  position: relative;
  z-index: 1;
    top: 4rem;
    left: -4rem;

  @supports (backdrop-filter: blur(10px)) or
    (-webkit-backdrop-filter: blur(10px)) {
    opacity: 0, 5;
    background-color: transparent;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }

  @-moz-document url-prefix() {
    background-color: rgba(255, 255, 255, .15);
    @media (prefers-color-scheme: dark) {
      background-color: rgba(50, 50, 52, 0.7);
    }
  }
`

const ImageWrapper = styled.div`
  border-radius: 50%;
  justify-self: center;
`

const ClientImage = styled.img`
  border-radius: 50%;
  width: 5vw;
`

const TextWrapper = styled.div`
  align-self: center;
  justify-self: center;
`

const Title = styled(BodyMain)`
  font-weight: 900;
  color: ${props => props.titleColor || "turquoise"};

  @media only screen and (min-width: 1200px) {
    font-size: 1.5vw; 
}


@media only screen and (max-width: 1200px) {
        font-size: 3vw; 
}
`

const BackgroundWrapper = styled.div`
  border-radius: 1.25rem;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  position: relative;
`

const BackgroundImage = styled.img`
width: 100%;
z-index: 0;
justify-self: center;
    border-radius: 30px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  }
`

const LogoWrapper = styled.div`
display: grid;
grid-template-columns: auto auto;
align-content: center;
  border-radius: 1.25rem;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  max-width: 20rem;
  position: relative;
  z-index: 1;
    top: -6rem;
    left: 40rem;

  @supports (backdrop-filter: blur(10px)) or
    (-webkit-backdrop-filter: blur(10px)) {
    opacity: 0, 5;
    background-color: transparent;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }

  @-moz-document url-prefix() {
    background-color: rgba(255, 255, 255, .15);
    @media (prefers-color-scheme: dark) {
      background-color: rgba(50, 50, 52, 0.7);
    }
  }
`

const LogoImage = styled.img`
width: 100%;
z-index: 0;
justify-self: center;
  }
`