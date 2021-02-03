import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import IntroText from "./IntroText"
import GlassButton from "./GlassButton"

export default function CommunityWithImage() {
  const data = useStaticQuery(graphql`
    query {
      discord: file(relativePath: { eq: "discord_community.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
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
          <Img fluid={data.discord.childImageSharp.fluid} fadeIn={false} />
        </ImageWrapper>
      </ContentWrapper>
      <ButtonWrapper>
        <GlassButton title="Join Now" link="https://discord.gg/rUV9mYWV8K" />
      </ButtonWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const ContentWrapper = styled.div`
  max-width: 80rem;
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