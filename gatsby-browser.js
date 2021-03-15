import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Layout from "./src/components/layout/layout"
import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"
/* eslint-disable */
const components = {
  wrapper: ({ children }) => <>{children}</>,
  img: props => <img style={{ width: "100%", margin: "0 auto" }} {...props} />,
  h1: props => (
    <he
      style={{ paddingTop: "1rem", fontWeight: "bold", fontSize: "60px" }}
      {...props}
    />
  ),
  h2: props => (
    <he
      style={{ paddingTop: "1rem", fontWeight: "bold", fontSize: "40px" }}
      {...props}
    />
  ),
  h3: props => (
    <he
      style={{ paddingTop: "1rem", fontWeight: "bold", fontSize: "30px" }}
      {...props}
    />
  ),
  h4: props => (
    <he
      style={{
        paddingTop: "1rem",
        fontWeight: "500",
        fontSize: "24px",
        lineHeight: "140%",
      }}
      {...props}
    />
  ),
  h5: props => (
    <he
      style={{
        paddingTop: "1rem",
        fontWeight: "normal",
        fontSize: "20px",
        lineHeight: "140%",
      }}
      {...props}
    />
  ),
  h6: props => (
    <he
      style={{
        paddingTop: "1rem",
        fontWeight: "normal",
        fontSize: "17px",
        lineHeight: "130%",
      }}
      {...props}
    />
  ),
  p: props => (
    <p
      style={{
        fontWeight: "normal",
        fontSize: "20px",
        lineHeight: "140%",
        paddingBottom: "1.5rem",
      }}
      {...props}
    />
  ),
  strong: props => <strong style={{ fontWeight: "bold" }} {...props} />,
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
