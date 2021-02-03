import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import SEO from "../components/layout/seo"
import GradientIntro from "../components/additionals/GradientIntro"

export default function CommunityPage({ data }) {
  return (
    <Wrapper>
      <SEO title="Community" />
      <GradientIntro
        title="People at it's core"
        description="We believe that we can create better products together. Join our community and make an impact on learning and sharing everyday."
        gradientColor=""
      />
      {/* <Img
          fluid={data.discord.nodes[0].localFile.childImageSharp.fluid}
          fadeIn={false}
      /> */}
    </Wrapper>
  )
}

export const imageQuery = graphql`
{
  discord: allGraphCmsAsset(filter: {fileName: {eq: "discord_community.png"}}) {
    edges {
      node {
        localFile { 
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}`

const Wrapper = styled.div``
