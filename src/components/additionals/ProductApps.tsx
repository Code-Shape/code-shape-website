import React from "react"
import { H2, BodyMain } from "../styles/TextStyles"
import styled from "styled-components"

export default function ProductApps() {
    return (
      <Wrapper>
        <ContentWrapper>
        <IconWrapper>
          <Icon src="/images/icons/smartphone_dm_v002.svg" className="icon" />
        </IconWrapper>
          <TextWrapper>
            <Title>Apps</Title>
            <Description>
              Apps tailored to your needs and target group.
            </Description>
          </TextWrapper>
        </ContentWrapper>
      </Wrapper>
    )
  }


  const Wrapper = styled.div`
  display: grid;
width: 100%;
`

const ContentWrapper = styled.div`
padding: 5rem 1.875rem;
    margin: 0 auto;
    background: rgba(255,255,255,.15);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    border-radius: 30px;
  z-index: 0;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
width: 300px;

*,
    & {
      transition: .3s ease-in;
    }

  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translate3d(0px, -3px, 0px) scale(1.2);
    z-index: 1;

    .icon {
      transform: perspective(200px) scale(1.3) rotate3d(1,0,0, 30deg) translate3d(0,-10px,0);
      transition-delay: .06s;
    }
  }
`

const Icon = styled.img`
width: 150px;
`
  
  const TextWrapper = styled.div`
    display: grid;
    gap: 1.875rem;
    justify-self: center;
  align-items: center;
  `

  const Title = styled(H2)`
  margin: 0 auto;
  text-align: center;
  color: #f51d7e;

    @media only screen and (max-width: 600px) {
      font-size: 50px;
    }
  `

  const Description = styled(BodyMain)`
  margin: 0 auto -30px auto;
  text-align: center;
  max-width: 20rem;
  `

  const IconWrapper = styled.div`
  margin: -30px auto 30px auto;
  width: 200px;
  height: 200px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;
  `