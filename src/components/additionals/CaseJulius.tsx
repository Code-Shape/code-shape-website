import React from "react"
import styled from "styled-components"
import { H1 } from "../styles/TextStyles"

export default function JuliusCase() {
  return (
    <Wrapper>
      <a href="http://www.juliusmygind.dk" target="_blank">
        <Julius06 className="CaseFour" src="/images/cases/juliusCaseImg06.png" />
        <TitleWrapper className="CaseOne">
            <Julius03 src="/images/cases/juliusCaseImg07.jpg" />
            <Title>juliusmygind.dk</Title>
        </TitleWrapper>
        <BundleWrapper className="CaseTwo">
            <Julius01 src="/images/cases/juliusCaseImg01.png" />
            <Julius02 src="/images/cases/juliusCaseImg02.png" />
        </BundleWrapper>
        <Julius04 className="CaseThree" src="/images/cases/juliusCaseImg04.png" />
        </a>
    </Wrapper>
  )
}

const Title = styled(H1)`
  color: #f51d7e;
  text-transform: uppercase;
  font-size: 2vw;
  margin-left: 4vw;
  margin-top: auto;
  margin-bottom: auto;
`

const Wrapper = styled.div`
  position: relative;
  margin-top: 150px;
  margin-bottom: 150px;

  *,
  & {
    transition: .3s ease-in;
  }
  
  :hover {
    transform: perspective(600px) translateZ(80px);
    .CaseOne {
      transform: perspective(900px) translate3d(-50px, -25px, 25px) rotate3d(0, 1, 0, 30deg); 
      transition-delay: .01s; 
    }
    .CaseTwo {
      transform: perspective(900px) translate3d(50px, 25px, 25px) rotate3d(-1, 1, 0, -20deg); 
      transition-delay: .06s;
    }
    .CaseThree {
      transform: perspective(900px) translate3d(50px, -25px, 25px) rotate3d(1, 1, 0, -20deg); 
      transition-delay: .1s;
    }
    .CaseFour {
      box-shadow: 10px 10px 30px #242424;
    }
  }
`

const TitleWrapper = styled.div`
    position: relative;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-radius: 1.5vw;
    width: 29vw;
    top: -2vw;
    left: -3vw;
    display: flex;
`

const BundleWrapper = styled.div`
    position: relative;
    left: 24vw;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    top: 2vw;
    border-radius: 1.5vw;
    width: 30vw;
`

const Julius01 = styled.img`
position: relative;  
z-index: 2;
  border-radius: 1.5vw 1.5vw 0 0;
  opacity: .3;
  width: 30vw;
  display: inline-block;
`

const Julius02 = styled.img`
position: relative;
  z-index: 2;
  width: 30vw;
  border-radius: 0px 0px 1.5vw 1.5vw;
  opacity: .5;
`

const Julius03 = styled.img`
position: relative;
width: 5vw;  
z-index: 1;
  left: 2.5vw;
  padding: 10px 0px;
border-radius: 50%;
`

const Julius04 = styled.img`
position: relative;
  z-index: 2;
  width: 13vw;
  background: rgba(255,255,255,.15);
    border-radius: 1.5vw;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    left: 40vw;
    top: -29vw;
`

const Julius06 = styled.img`
position: absolute;
  z-index: 0;
  width: 50vw;
    background: rgba(255,255,255,.15);
    border-radius: 1.5vw;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }
`