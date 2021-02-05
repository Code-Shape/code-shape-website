import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { H3, MediumText } from "../styles/TextStyles"

export default function CategorySection() {
  const data = useStaticQuery(graphql`
    query categoryQuery {
      allGraphCmsCategory {
        edges {
          node {
            id
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
          {data.allGraphCmsCategory.edges.map(tags => {
            return (
              <Link to={`/articles/tags/${tags.node.slug}`}>
              <Categories key={tags.node.id}>{tags.node.title}</Categories>
              </Link>
            )
          })}
        </CategoryWrapper>
      </ContentWrapper>

    </Wrapper>
  )
}

const Wrapper = styled.div``

const ContentWrapper = styled.div``

const TextWrapper = styled.div``

const Title = styled(H3)``

const Description = styled(MediumText)``

const CategoryWrapper = styled.div`
  display: grid; 
  grid-gap: 0.2rem;
  grid-template-columns: auto auto auto auto;
`

const Categories = styled.div`
  background-color: White;
  border-radius: 0.8rem;
  text-align: center;
  padding: 0.2rem;
`

