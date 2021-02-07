import React from "react"
import styled from "styled-components"
import { H1, BodyMain } from "../styles/TextStyles"

export default function JuliusCase() {
  return (
    <Wrapper><a href="http://www.juliusmygind.dk" target="_blank">
        <Julius06 src="/images/cases/juliusCaseImg06.png" style={{ top: "0" }} />
        <TitleWrapper>
            <Julius03 src="/images/cases/juliusCaseImg07.jpg" style={{ top: "0" }} />
            <Title>juliusmygind.dk</Title>
        </TitleWrapper>
        <BundleWrapper>
            <Julius01 src="/images/cases/juliusCaseImg01.png" style={{ top: "0" }} />
            <Julius02 src="/images/cases/juliusCaseImg02.png" style={{ top: "0" }} />
        </BundleWrapper>
        <Julius04 src="/images/cases/juliusCaseImg04.png" style={{ top: "0" }} />
        <DescriptionWrapper>
            <Julius05 src="/images/cases/juliusCaseImg05.png" style={{ top: "0" }} />
            <Description>“Helt igennem et rigtig godt arrangement.<br></br>
(...) Der skal lyde en meget stor ros herfra; både fra elever, forældre 
og lærere. Julius formåede at fange og røre de unge mennesker på sin hudlæse 
ærlige måde at fortælle sin historie på."<br></br>
</Description>
<Description02>- Maud Hjortshøj, Lære, Strandmølleskolen</Description02>
        </DescriptionWrapper>
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

const Description = styled(BodyMain)`
font-size: .8vw;
text-align: center;
font-weight: bold;
padding: 0px 10px;
color: white;
`

const Description02 = styled(BodyMain)`
font-size: .8vw;
padding: 20px 0px;
text-align: center;
color: white;
`

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 300px;
`

const TitleWrapper = styled.div`
    position: relative;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border: 1px solid white;
    border-radius: 1.5vw;
    width: 29vw;
    top: -4vw;
    left: -10vw;
    display: flex;
`

const BundleWrapper = styled.div`
    position: absolute;
    left: 35vw;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    top: 16vw;
    border-radius: 1.5vw;
    border: 1px solid white;
    width: 30vw;
`

const DescriptionWrapper = styled.div`
position: relative;
background: rgba(255,255,255,.15);
-webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    border-radius: 30px;
    width: 25vw;
    border: 1px solid white;
    left: -7vw;
    top: 12vw;
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
position: absolute;
  z-index: 1;
  width: 13vw;
  background: rgba(255,255,255,.15);
    border-radius: 1.5vw;
    border: 1px solid white;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    left: 44vw;
    margin-top: -5vw;
`

const Julius05 = styled.img`
position: relative;
display: block;  
width: 5vw;
padding: 25px 0px;
margin: auto;
`

const Julius06 = styled.img`
position: absolute;
  z-index: 0;
  width: 50vw;
    background: rgba(255,255,255,.15);
    border-radius: 1.5vw;
    border: 1px solid white;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    padding-top: 2vw;
  }
`