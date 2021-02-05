import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { H3, BodyMain } from "../styles/TextStyles"

export default function CategorySection() {
  const data = useStaticQuery(graphql`
    query categoryQuery {
      allGraphCmsCategory(filter: { title: { eq: "CSS" } }) {
        edges {
          node {
            title
            slug
            description
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>Browse by Categories</Title>
          <Description>
            Use the category tags to narrow down what you are looking for.
          </Description>
        </TextWrapper>
        <CategoryWrapper>
          <Categories>{data.edges.node.title}</Categories>
        </CategoryWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const ContentWrapper = styled.div``

const TextWrapper = styled.div``

const Title = styled(H3)``

const Description = styled(BodyMain)``

const CategoryWrapper = styled.div``

const Categories = styled.div``
