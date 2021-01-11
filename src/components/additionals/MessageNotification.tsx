import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { BodyMain, MediumText } from "../styles/TextStyles"

export default function MessageNotification(props) {
  const { name, text, image, link, nameColor, borderColor } = props
  return (
    <Link to={link || "/"}>
      <Wrapper>
        <ImageWrapper>
          <Image
            borderColor={borderColor || "3px solid white"}
            src={image || "/images/profiles/logo.png"}
            className="icon"
          />
        </ImageWrapper>
        <TextWrapper>
          <Name nameColor={nameColor}>{name || "Mr. Awesome"}</Name>
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
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  border: 0px;
  display: grid;
  grid-template-columns: 53px auto;
  align-content: center;
  grid-gap: 40px;

  @supports (backdrop-filter: blur(40px)) or
    (-webkit-backdrop-filter: blur(40px)) {
    opacity: 0, 5;
    background-color: transparent;
    -webkit-backdrop-filter: blur(40px);
    backdrop-filter: blur(40px);
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
  border: ${props => props.borderColor || "3px solid turquoise"};
  border-radius: 50%;
`

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
  min-height: 20px;
`

const Name = styled(BodyMain)`
  font-weight: 900;
  color: ${props => props.nameColor || "turquoise"};
`

const Text = styled(MediumText)`
  color: black;
  @media (prefers-color-scheme: dark) {
    color: white;
  }
`
