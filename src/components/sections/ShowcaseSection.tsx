import React from "react"
import styled from "styled-components"
import PortfolioBlobs from "../additionals/ShowcaseBlobs"
export default function ShowcaseSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <PortfolioBlobs
          title="Oym.dk"
          link="https://oym.dk"
          titleColor="#3E16BB"
          backgroundImage="/images/cases/stineCaseImg05.png"
          clipPath=""
        />
        <PortfolioBlobs
          title="PeterMygind.dk"
          link="https://petermygind.dk"
          titleColor="#F51D7E"
          backgroundImage="/images/cases/peterCaseImg01.png"
          clipPath=""
        />
        <PortfolioBlobs
          title="JuliusMygind.dk"
          link="https://juliusmygind.dk"
          titleColor="#F89B29"
          backgroundImage="/images/cases/juliusCaseImg06.png"
          clipPath=""
        />
      </ContentWrapper>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin: 4rem 2rem;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1.875rem;
`
