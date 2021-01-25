module.exports = {
  siteMetadata: {
    title: `Code Shape`,
    description: `Learn to create great things.`,
    author: `@codeshape`,
  },
  plugins: [
<<<<<<< Updated upstream
    {
      resolve: `gatsby-source-filesystem`,
=======
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
>>>>>>> Stashed changes
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
<<<<<<< Updated upstream
    "gatsby-plugin-postcss",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
=======
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
>>>>>>> Stashed changes
  ],
}
