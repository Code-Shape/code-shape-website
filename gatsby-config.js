require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Code Shape`,
    description: `Learn to create great things.`,
    author: `@codeshape`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-plugin-react-svg",
      ptions: {
        rule: {
          include: /svg/,
        },
      },
    },
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
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
}
