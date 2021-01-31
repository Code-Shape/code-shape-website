import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Layout from "./src/components/layout/layout"

/* eslint-disable */
const components = {
  wrapper: ({ children }) => <>{children}</>,
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
  p: props => <p style={{ fontSize: "16px", lineHeight: 1.6 }} {...props} />,
  strong: props => (
    <strong style={{ fontWeight: "900", lineHeight: 1.6 }} {...props} />
  ),
  img: props => <img style={{ width: "100%" }} {...props} />,
  pre: props => {
    const className = props.children.props.className || ""
    const matches = className.match(/language-(?<lang>.*)/)
    return (
      <Highlight
        {...defaultProps}
        code={props.children.props.children}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ""
        }
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  },
}

const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)

export { wrapPageElement, wrapRootElement }
