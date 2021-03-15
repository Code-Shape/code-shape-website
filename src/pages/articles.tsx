import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components"
import { H2, MediumText } from "../components/styles/TextStyles"
import GlassGradientIntro from "../components/intros/GlassGradientIntro"
import CategorySection from "../components/sections/CategorySection"
import SectionIntro from "../components/intros/SectionIntro"
import HeaderBackground from "../components/backgrounds/HeaderBackground"

export default function ArticlesPage({ data: { posts, projects } }) {
  return (
    <Wrapper>
      <HeaderBackground image="../images/blobs/HeaderBlob02.svg" />
      <GlassGradientIntro
        title="Reading is making Meaning"
        description="We believe we can create amazing things together by keeping our knowledge up to date. Therefore we will do our best to deliver that to you every week."
        gradientColor="-webkit-linear-gradient(left, #F89929, #F5217B)"
      />
      {/* <Search /> */}
      <CategorySection />
      {/* Future project: Deconstruct PostWrapper and create new custom component */}
      <PostWrapper>
        {posts.nodes.map(post => {
          return (
            <Link to={`/articles/${post.slug}`}>
              <ContentWrapper key={post.id}>
                <ArticleWrapper>
                  <ImageWrapper>
                    {post.coverImage.localFile.childImageSharp.gatsbyImageData && (
                      <GatsbyImage
                        image={post.coverImage.localFile.childImageSharp.gatsbyImageData}
                        alt={post.title}
                        className="featuredImageArticles" />
                    )}
                  </ImageWrapper>
                  <TextWrapper>
                    <PostTitle>{post.title}</PostTitle>
                    <ExcerptWrapper>
                      {post.excerpt && <Excerpt>{post.excerpt}</Excerpt>}
                    </ExcerptWrapper>
                    <ReadMore>Read more &rarr;</ReadMore>
                  </TextWrapper>
                </ArticleWrapper>
              </ContentWrapper>
            </Link>
          );
        })}
      </PostWrapper>
      <ProjectWrapper>
        <SectionIntro
          title="Discover Customer Cases"
          description="One of our goals is to bring people forward through technology. Read more about our customer cases and how we helped them reach their audience."
        />
        <Projects>
          {projects.nodes.map(project => {
            return (
              <Link to={`/projects/${project.slug}`}>
                <ContentWrapper key={project.id}>
                  <ArticleWrapper>
                    <ImageWrapper>
                      {project.coverImage.localFile.childImageSharp.gatsbyImageData && (
                        <GatsbyImage
                          image={project.coverImage.localFile.childImageSharp.gatsbyImageData}
                          alt={project.title}
                          className="featuredImageProjects" />
                      )}
                    </ImageWrapper>
                    <TextWrapper>
                      <ProjectTitle>{project.title}</ProjectTitle>
                      <ExcerptWrapper>
                        {project.excerpt && (
                          <Excerpt>{project.excerpt}</Excerpt>
                        )}
                      </ExcerptWrapper>
                      <ReadMore>Read more &rarr;</ReadMore>
                    </TextWrapper>
                  </ArticleWrapper>
                </ContentWrapper>
              </Link>
            );
          })}
        </Projects>
      </ProjectWrapper>
    </Wrapper>
  );
}

export const pageQuery = graphql`{
  posts: allGraphCmsPost(sort: {fields: date, order: DESC}) {
    nodes {
      id
      date: formattedDate
      excerpt
      slug
      title
      coverImage {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 600, layout: CONSTRAINED)
          }
        }
      }
    }
  }
  projects: allGraphCmsProject(sort: {fields: date, order: DESC}) {
    nodes {
      id
      date: formattedDate
      excerpt
      slug
      title
      coverImage {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 600, layout: CONSTRAINED)
          }
        }
      }
    }
  }
}
`

const Wrapper = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding-top: 6rem;
`

const PostWrapper = styled.div`
  padding: 1.875rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 1.5rem;

  justify-content: center;
  align-content: center;
`
const ContentWrapper = styled.div`
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
const ImageWrapper = styled.div`
.featuredImageArticles {
  height: 12rem;
}

.featuredImageProjects {
  height: 17rem;
}
`

const TextWrapper = styled.div`
  display: grid;
  grid-gap: 1.875rem;
  padding: 1.5rem;
`

const ExcerptWrapper = styled(MediumText)``

const Excerpt = styled.div`
@media only screen and (min-width: 600px) {
height: 10rem;
}
`

const ReadMore = styled.div`
  color: #503cce;
`

const PostTitle = styled(H2)`
@media only screen and (min-width: 600px) {
height: 7rem;
}
`

const ProjectWrapper = styled.div`
  margin: 0 auto;
  justify-content: center;
  align-content: center;
`

const Projects = styled.div`
  padding: 1.875rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  grid-gap: 1.5rem;
  justify-content: center;
  align-content: center;
`

const ProjectTitle = styled(H2)``
