import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components"
import IntroText from "../intros/IntroText"
import GlassButton from "../buttons/GlassButton"

export default function CommunityWithImage() {
  const data = useStaticQuery(graphql`{
  discord: file(relativePath: {eq: "discord_community.png"}) {
    childImageSharp {
      gatsbyImageData(width: 700, layout: CONSTRAINED)
    }
  }
}
`)

  return (
    <Wrapper>
      <ContentWrapper>
        <IntroText
          intro="Join us on Discord!"
          title="Great things come from team work"
          description="Be a part of a community that cares about each other and how they reach their software development goals and design goals. Are you ready?"
        />
        <ImageWrapper>
          <GatsbyImage image={data.discord.childImageSharp.gatsbyImageData} fadeIn={false} />
        </ImageWrapper>
      </ContentWrapper>
      <ButtonWrapper>
        <GlassButton
          title="Join Now"
          link="https://discord.gg/rUV9mYWV8K"
          titleColor="#F89B29"
        />
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 4rem;
`

const ContentWrapper = styled.div`
  max-width: 70rem;
  padding: 3.125rem auto;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22.5rem, 1fr));
  grid-gap: 1.875rem;
`

const ImageWrapper = styled.div`
  display: grid;
  align-content: center;
`

const ButtonWrapper = styled.div`
  padding: 3rem;
  display: grid;
  justify-content: center;
  align-items: center;
`
