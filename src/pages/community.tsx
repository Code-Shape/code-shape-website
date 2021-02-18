import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import SEO from "../components/layout/seo"
import GradientIntro from "../components/intros/GradientIntro"
import CommunityWithImage from "../components/additionals/CommunityWithImage"
import HeaderBackgrounds from "../components/backgrounds/HeaderBackgrounds"

export default function CommunityPage() {
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
      <HeaderBackgrounds image="../images/blobs/HeaderBlob03.svg" />
      <SEO title="Community" />
      <GradientIntro
        title="People at it's core"
        description="We believe that we can create better products together. Join our community and make an impact on learning and sharing everyday."
        gradientColor=""
      />
      <CommunityWithImage />
    </Wrapper>
  )
}

const Wrapper = styled.div``
