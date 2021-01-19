import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { BodyMain, MediumText } from "../styles/TextStyles"

export default function GlassCards(props) {
  const { title, titleColor, text, image, link, borderColor } = props
  return (
    <Link to={link || "/"}>
      <Wrapper>
        <ImageWrapper>
          <Image
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
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  max-width: 360px;
  min-height: 77px;
  padding: 15px;
  border-radius: 20px;
  border: 0px;
  display: grid;
  grid-template-columns: 53px auto;
  align-content: center;
  grid-gap: 40px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

  @supports (backdrop-filter: blur(40px)) or
    (-webkit-backdrop-filter: blur(40px)) {
    opacity: 0, 5;
    background-color: transparent;
    -webkit-backdrop-filter: blur(40px);
    backdrop-filter: blur(40px);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  @-moz-document url-prefix() {
    background-color: rgba(242, 242, 242, 0.7);
    @media (prefers-color-scheme: dark) {
      background-color: rgba(50, 50, 52, 0.7);
    }
  }

  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    transform: translateY(-3px);

    .icon {
      transform: scale(1.2);
    }
  }
`

const ImageWrapper = styled.div`
  width: 45px;
  height: 45px;
  display: grid;
`

const Image = styled.img`
  width: 70px;
  border: ${props => props.borderColor || "3px solid white"};
  border-radius: 50%;
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
