import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import tw from "tailwind-styled-components"
import Layout from "../components/layout/layout"
export default function BlogPostTemplate({
  data: { authorImage, coverImage },
  pageContext: { nextPost, page, previousPost },
}) {
  return (
    <Layout>
      <Wrapper>
        <Header>
          <div className="space-y-1 text-center">
            <dl className="space-y-10">
              <div>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base leading-6 font-medium text-gray-500">
                  <time dateTime={page.date}>{page.date}</time>
                </dd>
              </div>
            </dl>
            <PageTitle>{page.title}</PageTitle>
          </div>
        </Header>
        <div
          className="divide-y lg:divide-y-0 divide-gray-200 lg:grid lg:grid-cols-4 lg:col-gap-6 pb-16 lg:pb-20"
          style={{ gridTemplateRows: "auto 1fr" }}
        >
          <dl className="pt-6 pb-10 lg:pt-11 lg:border-b lg:border-gray-200">
            <dt className="sr-only">Author</dt>
            <dd>
              <ul className="flex justify-center lg:block space-x-8 sm:space-x-12 lg:space-x-0 lg:space-y-8">
                <li className="flex space-x-2">
                  <Img
                    fluid={authorImage.localFile.childImageSharp.fluid}
                    className="w-10 h-10 rounded-full"
                    fadeIn={false}
                  />
                  <dl className="flex-1 text-sm font-medium leading-5">
                    <dt className="sr-only">Name</dt>
                    <dd className="text-900">{page.author.name}</dd>
                    {page.author.title && (
                      <React.Fragment>
                        <dt className="sr-only">Title</dt>
                        <dd className="text-gray-500">{page.author.title}</dd>
                      </React.Fragment>
                    )}
                  </dl>
                </li>
              </ul>
            </dd>
          </dl>
          <Article>
            {coverImage && (
              <Img
                fluid={coverImage.localFile.childImageSharp.fluid}
                className="mb-8 rounded"
                fadeIn={false}
              />
            )}
            <Content>
              <MDXRenderer>
                {page.content.markdownNode.childMdx.body}
              </MDXRenderer>
            </Content>
          </Article>
          <Footer>
            {(nextPost || previousPost) && (
              <div className="space-y-8 py-8">
                {nextPost && (
                  <div>
                    <h2 className="text-xs tracking-wide uppercase text-gray-500">
                      Next Post
                    </h2>
                    <div className="text-purple-500 hover:text-purple-600">
                      <Link to={`/articles/${nextPost.slug}`}>
                        {nextPost.title}
                      </Link>
                    </div>
                  </div>
                )}
                {previousPost && (
                  <div>
                    <h2 className="text-xs tracking-wide uppercase text-gray-500">
                      Previous Post
                    </h2>
                    <div className="text-purple-500 hover:text-purple-600">
                      <Link to={`/articles/${previousPost.slug}`}>
                        {previousPost.title}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
            <div className="pt-8">
              <Link
                to="/articles/"
                className="text-purple-500 hover:text-purple-600"
              >
                &larr; Back to the blog
              </Link>
            </div>
          </Footer>
        </div>
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

const Wrapper = tw.div`
max-w-5xl
mx-auto
`
const Header = tw.div`
pt-6 
lg:pb-10
`
const PageTitle = tw.div`
text-3xl 
leading-9 
font-extrabold 
tracking-tight 
sm:text-4xl 
sm:leading-10 
md:text-5xl 
md:leading-14
`
const Article = tw.div`
divide-y 
divide-gray-200 
lg:pb-0 
lg:col-span-3 
lg:row-span-2
`
const Content = tw.div`
prose 
max-w-none 
pt-10 
pb-8
`

const Footer = tw.div`
text-sm 
font-medium 
leading-5 
divide-y 
divide-gray-200 
lg:col-start-1 
lg:row-start-2
`
