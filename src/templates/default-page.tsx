import React from "react"
import Layout from "../components/layout/layout"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function DefaultPageTemplate({ pageContext: { page } }) {
  return (
    <Layout>
      <Wrapper>
        <ContentWrapper>
          <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {page.title}
          </h1>
          {page.subtitle && (
            <p className="text-lg leading-7 text-gray-500">{page.subtitle}</p>
          )}
        </ContentWrapper>
        <div className="pb-16 lg:pb-20">
          <div className="prose max-w-none pt-10 pb-8">
            <MDXRenderer>{page.content.markdownNode.childMdx.body}</MDXRenderer>
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}
const Wrapper = styled.div`
  margin: 0 auto;
`

const ContentWrapper = styled.div``
