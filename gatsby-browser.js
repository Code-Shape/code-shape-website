import React from "react"
import { MDXProvider } from "@mdx-js/react"

const components = {
  h1: props => (
    <h1 style={{ fontSize: "60px", fontWeight: "bold" }} {...props} />
  ),
  h2: props => (
    <h2 style={{ fontSize: "40px", fontWeight: "bold" }} {...props} />
  ),
  h3: props => (
    <h3 style={{ fontSize: "30px", fontWeight: "bold" }} {...props} />
  ),
  h4: props => (
    <h4 style={{ fontSize: "20px", fontWeight: "bold" }} {...props} />
  ),  
  p: props => (
    <p style={{ fontSize: "16px", lineHeight: 1.6 }} {...props} />
  ),
  strong: props => (
    <strong style={{ fontWeight: "900", lineHeight: 1.6 }} {...props} />
  )
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
