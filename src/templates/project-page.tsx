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
import ReactDisqusComments from "react-disqus-comments"

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

  query ProjectQuery($id: String!) {
    authorImage: graphCmsAsset(
      authorAvatar: {
        elemMatch: { projects: { elemMatch: { id: { in: [$id] } } } }
      }
    ) {
      ...AssetFields
    }
    coverImage: graphCmsAsset(
      coverImageProject: { elemMatch: { id: { eq: $id } } }
    ) {
      ...AssetFields
    }
  }
`

export default function ArticlePostTemplate({
  data: { authorImage, coverImage },
  pageContext: { nextProject, project, previousProject },
}) {
  return (
    <Wrapper>
      <Header>
        <PublishDate>{project.date}</PublishDate>
        <PageTitle>{project.title}</PageTitle>
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
            <AuthorName>{project.author.name}</AuthorName>
            <AuthorTitle>{project.author.title}</AuthorTitle>
          </AuthorTextWrapper>
        </AuthorWrapper>
      </InformationWrapper>
      <ContentWrapper>
        <Img
          fluid={coverImage.localFile.childImageSharp.fluid}
          fadeIn={false}
          className="CoverImage"
        />
        <MDXRenderer>{project.content.markdownNode.childMdx.body}</MDXRenderer>
      </ContentWrapper>
      <Navigation>
        {(nextProject || previousProject) && (
          <div>
            <hr className="Divider" />
            {nextProject && (
              <div>
                <h3>Next Post</h3>
                <div>
                  <Link to={`/articles/${nextProject.slug}`}>
                    {nextProject.title}
                  </Link>
                </div>
                <hr className="Divider" />
              </div>
            )}
            {previousProject && (
              <div>
                <h3>Previous Post</h3>
                <div className="ArticleLink">
                  <Link to={`/articles/${previousProject.slug}`}>
                    {previousProject.title}
                  </Link>
                </div>
                <hr className="Divider" />
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
      <CommentsWrapper>
        <ReactDisqusComments
          shortname={process.env.GATSBY_DISQUS_NAME}
          identifier={project.id}
          title={project.title}
          url={project.url}
          category_id={project.category_id}
        />
      </CommentsWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
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
  display: grid;
  grid-gap: 1rem;
  width: 18rem;

  .Divider {
    color: #757372;
    line-height: 3rem;
  }

  .ArticleLink {
    padding: 30px;
  }
`

const CommentsWrapper = styled.div`
  padding: 1.2rem;
`
