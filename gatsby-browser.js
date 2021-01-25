import "./src/components/layout/layout.css"
import React from "react"
import { MDXProvider } from "@mdx-js/react"

const H1 = props => (
  <h1 style={{ fontSize: "60px", fontWeight: "bold" }} {...props} />
)

const H2 = props => (
  <h2 style={{ fontSize: "40px", fontWeight: "bold" }} {...props} />
)

const H3 = props => (
  <h2 style={{ fontSize: "30px", fontWeight: "bold" }} {...props} />
)

const H4 = props => (
  <h4 style={{ fontSize: "20px", fontWeight: "bold" }} {...props} />
)

const MyParagraph = props => (
  <p style={{ fontSize: "16px", lineHeight: 1.6 }} {...props} />
)

const Strong = props => <strong style={{ fontWeight: "bold" }} {...props} />

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: MyParagraph,
  strong: Strong,
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
