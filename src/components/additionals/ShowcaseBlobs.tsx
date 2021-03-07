import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { BodyMain } from "../styles/TextStyles"
export default function PortfolioBlobs(props) {
  const { title, link, titleColor, backgroundImage, clipPath } = props
  return (
    <Link to={link || "/"} target={"_blank"}>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper className="Title">
            <Title titleColor={titleColor}>{title || "codeshape"}</Title>
          </TextWrapper>
          <BackgroundWrapper className="Background">
            <BackgroundImage
              src={backgroundImage || "/images/profiles/logo.png"}
              clipPath={
                clipPath ||
                "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)"
              }
            />
          </BackgroundWrapper>
        </ContentWrapper>
      </Wrapper>
    </Link>
  )
}
const Wrapper = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  position: relative;
  *,
  & {
    transition: 0.3s ease-in;
  }
  @media only screen and (min-width: 600px) {
    :hover {
      transform: scale(1.1) translateY(-10px);
      .Background {
        filter: saturate(25%) brightness(30%);
        z-index: 0;
      }
      .Title {
        display: block;
        background: rgba(255, 255, 255, 0.4);
        padding: 10px;
        border-radius: 10px;
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
      }
    }
  }
`
const ContentWrapper = styled.div``
const TextWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
`
const Title = styled(BodyMain)`
  font-weight: 900;
  color: ${props => props.titleColor || "turquoise"};
  text-align: center;
  font-size: 2rem;
`
const BackgroundWrapper = styled.div``
const BackgroundImage = styled.img`
  width: 100%;
  z-index: 0;
  clip-path: ${props => props.clipPath || "url()"};
`
