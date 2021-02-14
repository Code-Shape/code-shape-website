import React from "react"
import styled from "styled-components"
import { H1 } from "../styles/TextStyles"

export default function StineCase() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Stine05 className="OymFour" src="/images/cases/stineCaseImg02.png" />
        <TitleWrapper className="OymOne">
            <Stine03 src="/images/cases/stineCaseImg01.jpg" />
            <Title>oym.dk</Title>
        </TitleWrapper>
        <StineWrapper className="OymTwo">
            <Stine01 src="/images/cases/stineCaseImg03.png" />
        </StineWrapper>
        <Stine04 className="OymThree" src="/images/cases/stineCaseImg04.png" />
        </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: -250px auto 0 auto;
  -webkit-box-align:center;
  -webkit-box-pack:center;
  display:-webkit-box;
`

const ContentWrapper = styled.div`
  margin-top: -50px;

  *,
  & {
  transition: .3s ease-in;
  }

  :hover {
    transform: perspective(600px) translateZ(80px);
    .OymOne {
      transform: perspective(900px) translate3d(50px, -25px, 25px) rotate3d(0, 1, 0, -30deg); 
      transition-delay: .01s; 
    }
    .OymTwo {
      transform: perspective(900px) translate3d(50px, 25px, 25px) rotate3d(-1, 1, 0, -20deg); 
      transition-delay: .06s;
    }
    .OymThree {
      transform: perspective(900px) translate3d(-50px, -25px, 25px) rotate3d(-1, 1, 0, 20deg); 
      transition-delay: .1s;
    }
    .OymFour {
      box-shadow: 10px 10px 30px #242424;
    }
}
`

//Title content
const TitleWrapper = styled.div`
    position: relative;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-radius: 1.5vw;
    width: 20vw;
    display: flex;
    flex-direction: row-reverse;
    top: -24vw;
    left: 34vw
`

//Page content images
const StineWrapper = styled.div`
position: relative;    
box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-radius: 1.5vw;
    width: 32vw;
    top: -16vw;
    left: 23vw;
`

//Logo image
const Stine04 = styled.img`
position: relative;
  z-index: 1;
  width: 22vw;
  padding: 1vw;
  background: rgba(255,255,255,.15);
    border-radius: 1.5vw;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    top: -46vw;
    left: -3vw;
`

//Front page image
const Stine05 = styled.img`
position: relative;
  z-index: 0;
  width: 50vw;
    background: rgba(255,255,255,.15);
    border-radius: 1.5vw;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }
`

const Stine01 = styled.img`
position: relative;  
z-index: 1;
  border-radius: 1.5vw;
  width: 32vw;
  opacity: .5;
`

//Client image
const Stine03 = styled.img`
position: relative;
width: 5vw;  
z-index: 1;
padding: 10px 0px;
right: 2.5vw;
border-radius: 50%;
`

const Title = styled(H1)`
  color: #f51d7e;
  text-transform: uppercase;
  font-size: 2vw;
  margin-right: 4vw;
  margin-top: auto;
  margin-bottom: auto;
`