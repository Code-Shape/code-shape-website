import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import SEO from "../components/layout/seo"
import GlassGradientIntro from "../components/intros/GlassGradientIntro"
import CommunityWithImage from "../components/additionals/CommunityWithImage"
import HeaderBackground from "../components/backgrounds/HeaderBackground"

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
      <HeaderBackground image="../images/blobs/HeaderBlob03.svg" />
      <SEO title="Community" />
      <GlassGradientIntro
        title="People at it's core"
        description="We believe that we can create better products together. Join our community and make an impact on learning and sharing everyday."
        gradientColor="-webkit-linear-gradient(left, #F89929, #F5217B)"
      />
      <CommunityWithImage />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding-top: 6rem;
`
