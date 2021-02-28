import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { BodyMain, MediumText } from "../styles/TextStyles"

export default function UpdatesCard(props) {
  const {
    title,
    titleColor,
    text,
    image,
    link,
    borderColor,
    backgroundColor,
    imageBackgroundColor,
  } = props
  return (
    <Link to={link || "/"}>
      <Wrapper>
        <ContentWrapper backgroundColor={backgroundColor || " white"}>
        <ImageWrapper>
          <Image
            imageBackgroundColor={imageBackgroundColor || " white"}
            borderColor={borderColor || "3px solid white"}
            src={image || "/images/icons/account.svg"}
            className="icon"
          />
        </ImageWrapper>
        <TextWrapper>
          <Name titleColor={titleColor}>{title || "Mr. Awesome"}</Name>
          <Text>
            {text || "Can you help me learn how to engage my audience? 👋🏼"}
          </Text>
        </TextWrapper>
        </ContentWrapper>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  max-width: 70rem;
    margin: 0 auto;
    min-height: 4rem;
`

const ContentWrapper = styled.div`
padding: 2rem;
display: grid;
  grid-gap: 1.25rem;
border-radius: 1.25rem;
box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
margin: 1.875rem;
background-color: ${props => props.backgroundColor || "white"};
border: 1px solid rgba(255, 255, 255, 0.3);
z-index: 1;

@media only screen and (min-width: 600px) {
    grid-template-columns: auto auto;
}

*,
& {
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}

@media only screen and (min-width: 600px) {
  :hover {
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
  0px 30px 60px rgba(23, 0, 102, 0.5),
  inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  z-index: 2;

    .icon {
      transform: scale(1.2);
    }
  }
}
`

const ImageWrapper = styled.div`
  width: 8rem;
  min-height: 8rem;
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  position: relative;
  justify-self: center;

  @media only screen and (min-width: 600px) {
    ${Wrapper}:hover & {
      filter: hue-rotate(10deg) saturate(120%);
    }
  }
`

const Image = styled.img`
  width: 7rem;
  padding: 0.2rem;
  border: ${props => props.borderColor || "3px solid white"};
  position: relative;
  display: inline-block;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: ${props => props.imageBackgroundColor || "white"};
`

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
  min-height: 20px;
`

const Name = styled(BodyMain)`
  font-weight: 900;
  color: ${props => props.titleColor || "white"};
`

const Text = styled(MediumText)`
  color: black;
  @media (prefers-color-scheme: dark) {
    color: white;
  }
`
