import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Caption2, SmallText } from "../styles/TextStyles"

export default function SignUpButton(props) {
  const { title, subtitle, link, icon } = props
  return (
    <Link to={link || "#hs-chat-open"}>
      <Wrapper>
          <Icon src={icon || "/images/icons/chat_dm_v002.svg"} className="icon" />
        <TextWrapper>
          <Title>{title || "Contact"}</Title>
          <Subtitle>{subtitle || "Open chat"}</Subtitle>
        </TextWrapper>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  max-width: 150px;
  min-height: 50px;
  padding: 12px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  border: 0px;
  display: grid;
  margin: 0 auto;
  align-content: center;
  gap: 20px;

  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  @media only screen and (min-width: 600px) {
  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px) scale(1.1);
    filter: hue-rotate(10deg) brightness(150%) saturate(120%);

    .icon {
      transform: scale(1.2);
    }
  }
}
`

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`

const Title = styled(Caption2)`
  color: #f51d7e;
  text-align: center;
  font-size: 30px;
  line-height: 1em;

  @media only screen and (min-width: 600px) {
    ${Wrapper}:hover & {
      color: #fff;
    }
  }
`

const Subtitle = styled(SmallText)`
  color: #f51d7e;
  opacity: 0.7;
  text-align: center;
  font-size: 20px;
  margin-bottom: 15px;

  @media only screen and (min-width: 600px) {
  ${Wrapper}:hover & {
    color: #fff;
    opacity: 1;
  }
}
`

const Icon = styled.img`
  width: 70px;
  height: 70px;
  margin: 0 auto -15px auto;
`

