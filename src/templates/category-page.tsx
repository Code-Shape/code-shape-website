import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { H1, H2, BodyMain, MediumText } from "../components/styles/TextStyles"

export default function CategoryPageTemplate({
  pageContext: { category },
  data: { allGraphCmsPost },
}) {
  return (
    <Wrapper>
      <HeaderWrapper>
        <TextWrapper>
          <TitleWrapper>{category.title}</TitleWrapper>
          <DescriptionWrapper>{category.description}</DescriptionWrapper>
        </TextWrapper>
      </HeaderWrapper>
      {/* Future project: Deconstruct PostWrapper and create new custom component */}
      <PostWrapper>
        {allGraphCmsPost.nodes.map(post => {
          return (
            <Link to={`/articles/${post.slug}`}>
              <ContentWrapper key={post.id}>
                <ArticleWrapper>
                  <ImageWrapper>
                    {post.coverImage.localFile.childImageSharp.fluid && (
                      <Img
                        fluid={post.coverImage.localFile.childImageSharp.fluid}
                        alt={post.title}
                        className="featuredImage"
                      />
                    )}
                  </ImageWrapper>
                  <InnerTextWrapper>
                    <Category>{category.title}</Category>
                    <PostTitle>{post.title}</PostTitle>
                    <ExcerptWrapper>
                      {post.excerpt && <Excerpt>{post.excerpt}</Excerpt>}
                    </ExcerptWrapper>
                    <ReadMore>
                      <Link
                        to={`/articles/${post.slug}`}
                        className=""
                        aria-label={`Read "${post.title}"`}
                      >
                        Read more &rarr;
                      </Link>
                    </ReadMore>
                  </InnerTextWrapper>
                </ArticleWrapper>
              </ContentWrapper>
            </Link>
          )
        })}
      </PostWrapper>
    </Wrapper>
  )
}

export const pageQuery = graphql`
  query RelatedCategoryPosts($slug: String!) {
    allGraphCmsPost(
      filter: { categories: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      nodes {
        id
        date: formattedDate
        excerpt
        slug
        title
        coverImage {
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
  }
`

const Wrapper = styled.div``

const HeaderWrapper = styled.div`
  min-height: 250px;
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 30px;
`

const TextWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  text-align: center;
`

const TitleWrapper = styled(H1)`
  padding: 0.2rem;
  font-weight: 900;
  background: -webkit-linear-gradient(left, #7230ce, #3E16BB)};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const DescriptionWrapper = styled(BodyMain)``

const PostWrapper = styled.div`
  margin: 0 auto;
  padding: 1.875rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  grid-gap: 1.5rem;
  max-width: 70rem;
  justify-content: center;
  align-content: center;
`

const ContentWrapper = styled.div`
  margin: 0 auto;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  position: relative;
  top: 0;
  overflow: hidden;
  border-radius: 1.2rem;

  @media (prefers-color-scheme: dark) {
    background: #151515;
    color: white;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 20px 40px rgba(23, 23, 23, 0.2),
      inset 0px 0px 0px 0.5px rgba(23, 23, 23, 0.5);
    *,
    & {
      transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    :hover {
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 30px 60px rgba(24, 0, 102, 0.3),
        inset 0px 0px 0px 0.5px rgba(63, 63, 63, 0.5);
      transform: translateY(-3px);
    }
  }
  @media (prefers-color-scheme: light) {
    background: #ffffff;
    color: black;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 20px 40px rgba(23, 23, 23, 0.2),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    *,
    & {
      transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    :hover {
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 30px 60px rgba(255, 255, 255, 0.3),
        inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
      transform: translateY(-3px);
    }
  }
`

const ArticleWrapper = styled.div`
  display: grid;
  grid-gap: 1.875rem;
`
const ImageWrapper = styled.div``

const InnerTextWrapper = styled.div`
  display: grid;
  grid-gap: 1.875rem;
  padding: 1.5rem;
`

const Category = styled.div`
  border-radius: 1rem;
  display: inline;
  color: #503cce;
`

const ExcerptWrapper = styled(MediumText)``

const Excerpt = styled.div``

const ReadMore = styled.div``

const PostTitle = styled(H2)``
