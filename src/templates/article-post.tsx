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
        <InformationWrapper>
          <AuthorWrapper>
            <AuthorAvatar>
              <Img
                fluid={authorImage.localFile.childImageSharp.fluid}
                fadeIn={false}
                className="Image"
              />
            </AuthorAvatar>
            <AuthorTextWrapper>
              <AuthorName>{page.author.name}</AuthorName>
              <AuthorTitle>{page.author.title}</AuthorTitle>
            </AuthorTextWrapper>
          </AuthorWrapper>
          
        </InformationWrapper>
        <ContentWrapper>
          <Img
            fluid={coverImage.localFile.childImageSharp.fluid}
            fadeIn={false}
            className="CoverImage"
          />
          <MDXRenderer>{page.content.markdownNode.childMdx.body}</MDXRenderer>
        </ContentWrapper>
        <Navigation>
            {(nextPost || previousPost) && (
              <div className="Test">
                <hr className="Divider"/>
                {nextPost && (
                  <div >
                    <h2 >Next Post</h2>
                    <div >
                      <Link to={`/articles/${nextPost.slug}`}>
                        {nextPost.title}
                      </Link>
                    </div>
                    <hr className="Divider"/>
                  </div>
                )}
                {previousPost && (
                  <div>
                    <h2>Previous Post</h2>
                    <div>
                      <Link to={`/articles/${previousPost.slug}`}>
                        {previousPost.title}
                      </Link>
                    </div>
                    <hr className="Divider"/>
                  </div>
                )}
              </div>
            )}
            <div>
              <Link to="/articles/" className="">
                &larr; Back to the blog
              </Link>
            </div>
          </Navigation>
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

const Wrapper = styled.div`
  margin: 1.875rem;
  display: grid;
  grid-gap: 1.875rem;
`

const Header = styled.div`
  text-align: center;
  margin: 0 auto;
`

const PublishDate = styled(BodyMain)`
  color: #757372;
`

const PageTitle = styled(H1)``

const InformationWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));


`

const ContentWrapper = styled.div`
display: grid;
grid-gap: 1rem;
margin 0 auto;
max-width: 45rem;

  .CoverImage {
    border-radius: 1.25rem;
    object-fit: cover;
  }
`

const AuthorWrapper = styled.div`
  margin: 0 auto;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: auto auto;
  width: 20rem;
  justify-content: center;
  align-content: center;
`

const AuthorAvatar = styled.div`
  .Image {
    border-radius: 50%;
    border: 3px solid white;
    width: 4rem;
  }
`

const AuthorTextWrapper = styled.div`
display: grid;
justify-content: center;
align-content: center;`


const AuthorName = styled(MediumText)`
  font-weight: 900;
`

const AuthorTitle = styled(Caption)`
  color: #757372;
`

const Navigation = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: 1.875rem;
  display: grid;
  grid-gap: 1rem;
  width: 18rem;

  .Divider {
    color: #757372;
    line-height: 3rem;
  }
`
1