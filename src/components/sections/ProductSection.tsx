import React from "react"
import { H1, BodyMain } from "../styles/TextStyles"
import styled from "styled-components"
import Products from "../additionals/Products"

export default function ProductSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            <span className="products">Products</span> we offer{" "}
          </Title>
          <Description>
            We bring people forward through technology, and learning is the best
            way to introduce insanely cool new things.
          </Description>
        </TextWrapper>
      </ContentWrapper>
      <ProductWrapper>
        <Products
            iconImage="/images/icons/web_dm_v002.svg"
            title="Web"
            titleColor="#f51d7e"
            text="Websites tailored to your needs and target group."
          />
          <Products
            iconImage="/images/icons/smartphone_dm_v002.svg"
            title="Apps"
            titleColor="#f51d7e"
            text="Apps tailored to your needs and target group."
          />
          <Products
            iconImage="/images/icons/controller_dm_v002.svg"
            title="Games"
            titleColor="#f51d7e"
            text="Minor games to reach your audience."
          />
        </ProductWrapper>
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
  max-width: 40rem;
`

const ProductWrapper = styled.div`
display: grid;
grid-template-columns: auto auto auto;
grid-gap: 2rem;

@media only screen and (max-width: 900px) {
  grid-template-columns: none;
}
`