import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { H1 } from "../styles/TextStyles"

export default function CategorySection({ data: { allGraphCmsCategory } }) {
    return (
    <Wrapper>
        <ContentWrapper>
            <TextWrapper>
                <Title>Browse by Cateory</Title>
                <Description>When you are browsing by category </Description>
            </TextWrapper>
            <CategoryWrapper>
            </CategoryWrapper>
        </ContentWrapper>
    </Wrapper>
    )
}

export const CategoryQuery = graphql`
{
  allGraphCmsCategory {
    edges {
      node {
        title
        slug
        description
      }
    }
  }
}
`

const Wrapper = styled.div``

const ContentWrapper = styled.div``

const TextWrapper = styled.div``

const Title = styled(H1)``

const Description = styled(BodyMain)``

const CategoryWrapper = styled.div``

const Category = styled.div``