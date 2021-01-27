import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import {
  BodyMain,
  Caption,
  H1,
  MediumText,
} from "../components/styles/TextStyles"
export default function BlogPostTemplate({
  data: { authorImage, coverImage },
  pageContext: { nextPost, page, previousPost },
}) {
  return (
    <Layout>
      <Wrapper>
        <Header>
          <PublishDate>{page.date}</PublishDate>
          <PageTitle>{page.title}</PageTitle>
        </Header>
        <ArticleWrapper>
          <AuthorWrapper>
            <AuthorAvatar>
              <Img
                fluid={authorImage.localFile.childImageSharp.fluid}
                className="AuthorImage"
                fadeIn={false}
              />
            </AuthorAvatar>
            <TextWrapper>
              <AuthorName>{page.author.name}</AuthorName>
              <AuthorTitle>{page.author.title}</AuthorTitle>
            </TextWrapper>
          </AuthorWrapper>
          <Article>
            <ContentWrapper>
              <Img
                fluid={coverImage.localFile.childImageSharp.fluid}
                className="CoverImage"
                fadeIn={false}
              />
              <MDXRenderer>
                {page.content.markdownNode.childMdx.body}
              </MDXRenderer>
            </ContentWrapper>
          </Article>
          <Footer>
            {(nextPost || previousPost) && (
              <div>
                {nextPost && (
                  <div className="Navigation">
                    <h2>Next Post</h2>
                    <div>
                      <Link to={`/articles/${nextPost.slug}`}>
                        {nextPost.title}
                      </Link>
                    </div>
                  </div>
                )}
                {previousPost && (
                  <div className="Navigation">
                    <h2>Previous Post</h2>
                    <div>
                      <Link to={`/articles/${previousPost.slug}`}>
                        {previousPost.title}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
            <div>
              <Link to="/articles/" className="">
                &larr; Back to the blog
              </Link>
            </div>
          </Footer>
        </ArticleWrapper>
      </Wrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  fragment AssetFields on GraphCMS_Asset {
    id
    localFile {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  query BlogPostQuery($id: String!) {
    authorImage: graphCmsAsset(
      authorAvatar: {
        elemMatch: { posts: { elemMatch: { id: { in: [$id] } } } }
      }
    ) {
      ...AssetFields
    }
    coverImage: graphCmsAsset(
      coverImagePost: { elemMatch: { id: { eq: $id } } }
    ) {
      ...AssetFields
    }
  }
`

const Wrapper = styled.div``

const ArticleWrapper = styled.div`
  margin: 1.875rem;
  display: grid;
  grid-gap: 1.875rem;
  grid-template-columns: auto auto;
`

const Article = styled.div``

const Header = styled.div`
  text-align: center;
  margin: 0 auto;
`

const PublishDate = styled(BodyMain)`
  color: #757372;
`

const PageTitle = styled(H1)``

const AuthorWrapper = styled.div`
  .Author {
    grid-area: Author;
  }
  max-width: 20rem;
  max-height: 4rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: auto auto;
  align-content: center;
  grid-gap: 1.25rem;
  border-radius: 1.25rem;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

  @supports (backdrop-filter: blur(40px)) or
    (-webkit-backdrop-filter: blur(40px)) {
    opacity: 0, 5;
    background-color: transparent;
    -webkit-backdrop-filter: blur(40px);
    backdrop-filter: blur(40px);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  @-moz-document url-prefix() {
    background-color: rgba(242, 242, 242, 0.7);
    @media (prefers-color-scheme: dark) {
      background-color: rgba(50, 50, 52, 0.7);
    }
  }
`

const AuthorAvatar = styled.div`
  .AuthorImage {
    border: 3px solid white;
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    display: grid;
    justify-content: center;
    align-content: center;
    justify-self: center;
    position: relative;
  }
`

const TextWrapper = styled.div`
  display: grid;
  min-height: 1.25rem;
`

const AuthorName = styled(MediumText)`
  font-weight: 900;
  color: black;
  @media (prefers-color-scheme: dark) {
    color: white;
  }
`

const AuthorTitle = styled(Caption)`
  color: #757372;
`

const ContentWrapper = styled.div`
  display: grid;
  gap: 1.25rem;

  .CoverImage {
    border-radius: 1.25rem;
  }
`

const Footer = styled.div`
  display: grid;
  grid-gap: 1.25rem;

  .Navigation {
    display: grid;
    grid-gap: 1.25rem;
  }
`
