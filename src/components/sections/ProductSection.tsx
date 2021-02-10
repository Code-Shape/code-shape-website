import React from "react"
import { H1, BodyMain } from "../styles/TextStyles"
import styled from "styled-components"
import ProductWeb from "../additionals/ProductWeb"
import ProductApps from "../additionals/ProductApps"
import ProductGames from "../additionals/ProductGames"
import BlobBackground03 from "../backgrounds/BlobBackground03"

export default function ProductSection() {
    return (
      <Wrapper>
        <BlobBackground03 />
        <ContentWrapper>
          <TextWrapper>
            <Title><span className="products">Products</span> we offer </Title>
            <Description>
              We bring people forward through technology, and learning is the best
              way to introduce insanely cool new things.
            </Description>
          </TextWrapper>
        </ContentWrapper>
        <ProductWeb />
        <ProductGames />
        <ProductApps />
      </Wrapper>
    )
  }


  const Wrapper = styled.div`
  `

  const ContentWrapper = styled.div`
    padding: 5rem 1.875rem;
    margin: 0 auto;
  `
  
  const TextWrapper = styled.div`
    display: grid;
    gap: 1.875rem;
    justify-self: center;
  align-items: center;
  `
  const Title = styled(H1)`
  margin: 0 auto;
  text-align: center;

    @media only screen and (max-width: 600px) {
      font-size: 50px;
    }
  
    .products {
        color: #4518c3;
    }
    `
  
  const Description = styled(BodyMain)`
  margin: 0 auto;
  text-align: center;
  `