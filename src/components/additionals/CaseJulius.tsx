import React from "react"
import styled from "styled-components"
import { H1 } from "../styles/TextStyles"

export default function JuliusCase() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Julius06
          className="CaseFour"
          src="/images/cases/juliusCaseImg06.png"
        />
        <TitleWrapper className="CaseOne">
          <Julius03 src="/images/cases/juliusCaseImg07.jpg" />
          <Title>juliusmygind.dk</Title>
        </TitleWrapper>
        <BundleWrapper className="CaseTwo">
          <Julius01 src="/images/cases/juliusCaseImg01.png" />
          <Julius02 src="/images/cases/juliusCaseImg02.png" />
        </BundleWrapper>
        <Julius04
          className="CaseThree"
          src="/images/cases/juliusCaseImg04.png"
        />
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 40rem;
`

const ContentWrapper = styled.div`
  margin: 0 auto;

  *,
  & {
    transition: 0.3s ease-in;
  }

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
  }
`

//Title content
const TitleWrapper = styled.div`
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  display: flex;
  border-radius: 30px;
  width: 560px;
`

//Page content images
const BundleWrapper = styled.div`
  z-index: 1;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  width: 580px;
`

//Logo image
const Julius04 = styled.img`
  z-index: 2;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 30px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  width: 300px;
`

//Front page image
const Julius06 = styled.img`
width: 1000px;
  z-index: 0;
    border-radius: 30px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  }
`

const Title = styled(H1)`
  color: #f51d7e;
  text-transform: uppercase;
  font-size: 35px;
  margin-left: 80px;
  margin-top: auto;
  margin-bottom: auto;
`

//Top bundle image
const Julius01 = styled.img`
  position: relative;
  z-index: 2;
  border-radius: 30px 30px 0 0;
  opacity: 0.3;
  width: 580px;
  display: inline-block;
`

//Bottom bundle image
const Julius02 = styled.img`
  position: relative;
  z-index: 2;
  width: 580px;
  border-radius: 0px 0px 30px 30px;
  opacity: 0.5;
`

//Client image
const Julius03 = styled.img`
  position: relative;
  width: 100px;
  z-index: 1;
  left: 50px;
  padding: 10px 0px;
  border-radius: 50%;
`
