require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "Code Shape",
    author: "Code Shape",
    description: "Learn how to create great apps",
    keywords:
      "Code, Code Shape, Learn, Apps, Web Apps, Articles, Community, For Business",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-plugin-react-svg",
      ptions: {
        rule: {
          include: /svg/,
        },
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-graphcms",
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        token: process.env.GRAPHCMS_TOKEN,
        buildMarkdownNodes: true,
        downloadLocalImages: true,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    "gatsby-transformer-sharp",
  ],
}
