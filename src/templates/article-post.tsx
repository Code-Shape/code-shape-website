import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import {
  BodyMain,
  Caption,
  H1,
  MediumText,
} from "../components/styles/TextStyles"
import Utterances from "utterances-react"
import HeaderBackground from "../components/backgrounds/HeaderBackground"

export const pageQuery = graphql`
  fragment AssetFields on GraphCMS_Asset {
    id
    localFile {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }

  query ArticlePostQuery($id: String!) {
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

export default function ArticlePostTemplate({
  data: { authorImage, coverImage },
  pageContext: { nextPost, page, previousPost },
}) {
  return (
    <Wrapper>
      <HeaderBackground image="../images/blobs/HeaderBlob05.svg" />
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
          <NavigationButtons>
            {previousPost && (
              <Link to={`/articles/${previousPost.slug}`}>
                <div className="prevPost">
                  <div className="prevSymbol"></div>
                  <h3>Previous Post</h3>
                  <div>{previousPost.title}</div>
                </div>
              </Link>
            )}
            <Link to="/articles/">
              <div className="blogBack">
                <div className="blogSymbol"></div>
                Back to articles
              </div>
            </Link>
            {nextPost && (
              <Link to={`/articles/${nextPost.slug}`}>
                <div className="nextPost">
                  <div className="nextSymbol"></div>
                  <h3>Next Post</h3>
                  <div>{nextPost.title}</div>
                </div>
              </Link>
            )}
          </NavigationButtons>
        )}
      </Navigation>
      <CommentsWrapper>
        <Utterances
          repo="Code-Shape/code-shape-website"
          issueTerm="pathname"
          label=""
          theme="preferred-color-scheme"
          crossorigin="anonymous"
          async={false}
          style={`
            & .utterances {
              max-width: 77rem;
            }
          `}
        />
      </CommentsWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 9rem auto;
  display: grid;
  grid-gap: 1.875rem;
  max-width: 77rem;
`

const Header = styled.div`
  display: grid;
  grid-gap: 1rem;
  text-align: center;
  padding: 1.2rem;
`

const PublishDate = styled(BodyMain)`
  color: #757372;
  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`

const PageTitle = styled(H1)`
  @media only screen and (max-width: 600px) {
    font-size: 40px;
  }
`

const InformationWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`

const ContentWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin: 0 auto;
  padding: 1.2rem;

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
    position: relative;
    display: inline-block;
    padding-top: 1px;
    height: 60px;
    width: 60px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    background-image: initial;
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-repeat-x: initial;
    background-repeat-y: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: rgb(255, 255, 255);
    border: 3px solid white;
  }
`

const AuthorTextWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
`

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
  line-height: 1.5rem;

  .prevPost {
    padding: 1rem;
    border-radius: 1rem;
    width: 12rem;
    display: grid;
    grid-gap: 0.5rem;
    height: 7rem;
    align-content: center;
  }

  .prevSymbol {
    background: #4f1ec0;
    height: 2rem;
    width: 4rem;
    margin: 0 auto;
    clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
  }

  .blogBack {
    padding: 1rem;
    border-radius: 1rem;
    width: 12rem;
    color: #f51d7e;
    display: grid;
    grid-gap: 0.5rem;
    height: 7rem;
    align-content: center;
  }

  .blogSymbol {
    background: #f51d7e;
    height: 2rem;
    width: 4rem;
    margin: 0 auto;
    clip-path: polygon(0 1%, 50% 44%, 100% 0, 100% 65%, 50% 100%, 0 65%);
  }

  .nextPost {
    padding: 1rem;
    border-radius: 1rem;
    width: 12rem;
    display: grid;
    grid-gap: 0.5rem;
    height: 7rem;
    align-content: center;
  }

  .nextSymbol {
    background: #4f1ec0;
    height: 2rem;
    width: 4rem;
    margin: 0 auto;
    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
  }
`

const NavigationButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  @media only screen and (max-width: 740px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
`

const CommentsWrapper = styled.div`
  padding: 1.2rem;
`
