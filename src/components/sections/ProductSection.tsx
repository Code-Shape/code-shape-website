import React from "react"
import { H1, BodyMain } from "../styles/TextStyles"
import styled from "styled-components"
import Products from "../cards/ProductCard"
import BlobBackground from "../backgrounds/BlobBackground"

export default function ProductSection() {
  return (
    <Wrapper>
      <BlobBackground image="../images/blobs/BackgroundBlob01.svg" />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            <span className="products">Products</span> we offer{" "}
          </Title>
          <Description>
            We offer you a cool way to incorporate new products into your daily
            routine, and make them seemingly work with your business.
          </Description>
        </TextWrapper>
      </ContentWrapper>
      <ProductWrapper>
        <Products
          iconImage="/images/icons/web_dm_v002.svg"
          title="Web Apps"
          titleColor="#FF7F00"
          text="Having a website is a good way to express yourself to your audience and the world."
        />
        <Products
          iconImage="/images/icons/smartphone_dm_v002.svg"
          title="Mobile Apps"
          titleColor="#FF7F00"
          text="Having a mobile app will let you reach your audience while on the road."
        />
        <Products
          iconImage="/images/icons/controller_dm_v002.svg"
          title="Games"
          titleColor="#FF7F00"
          text="Incorporating games in learning will enhance the experience overall."
        />
      </ProductWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0;
`

const ContentWrapper = styled.div`
  margin: 0 auto;
`

const TextWrapper = styled.div`
  display: grid;
  gap: 1.875rem;
  justify-self: center;
  align-items: center;
  padding: 0 1.2rem;
`
const Title = styled(H1)`
  text-align: center;

  @media only screen and (max-width: 600px) {
    font-size: 50px;
  }

  .products {
    color: #ff7f00;
  }
`

const Description = styled(BodyMain)`
  margin: 0 auto;
  text-align: center;
  max-width: 40rem;
`

const ProductWrapper = styled.div`
  max-width: 65rem;
  padding: 1.875rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1.875rem;
`
