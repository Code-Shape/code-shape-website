import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { BodyMain } from "../styles/TextStyles"

export default function ClientProject(props) {
  const {
    title,
    clientImage,
    link,
    titleColor,
    backgroundImage,
    logoImage,
  } = props
  return (
    <Link to={link || "/"} target= {"_blank"}>
      <Wrapper>
        <ContentWrapper>
          <ClientWrapper className="Client">
            <ImageWrapper>
              <ClientImage src={clientImage || "/images/profiles/logo.png"} />
            </ImageWrapper>
            <TextWrapper>
              <Title titleColor={titleColor}>{title || "codeshape"}</Title>
            </TextWrapper>
          </ClientWrapper>
          <BackgroundWrapper className="Background">
            <BackgroundImage
              src={backgroundImage || "/images/profiles/logo.png"}
            />
          </BackgroundWrapper>
          <LogoWrapper className="Logo">
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
  position: relative;

  *,
  & {
    transition: 0.3s ease-in;
  }

  @media only screen and (min-width: 600px) {
  :hover {
    .Client {
      transform: perspective(900px) translate3d(-100px, -25px, 25px)
        rotate3d(-1, 1, 0, 30deg);
      transition-delay: 0.01s;
    }
    .Background {
      transform: scale(1.1);
    }
    .Logo {
      transform: perspective(900px) translate3d(50px, 50px, 25px)
        rotate3d(-.5, 1, 0, -45deg);
    }
  }
}
`

const ContentWrapper = styled.div`
  padding: 1.875rem;
`

const ClientWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1rem;
  align-content: center;
  padding: 0.5rem;
  max-width: 30rem;
  left: 0;
  top: 0px;
  position: absolute;
  z-index: 1;
  border-radius: 1.25rem;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

  @supports (backdrop-filter: blur(10px)) or
    (-webkit-backdrop-filter: blur(10px)) {
    opacity: 0, .15;
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
`

const LogoWrapper = styled.div``

const LogoImage = styled.img`
  padding: 0.5rem;
  max-width: 20%;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: 1;
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
    background-color: rgba(255, 255, 255, 0.1);
    @media (prefers-color-scheme: dark) {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`
