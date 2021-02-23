require("dotenv").config()

const path = require("path")

// const myQuery = `{
//   pages: allSitePage {
//     nodes {
//       # try to find a unique id for each node
//       # if this field is absent, it's going to
//       # be inserted by Algolia automatically
//       # and will be less simple to update etc.
//       objectID: id
//       path
//       internal {
//         type
//         contentDigest
//         owner
//       }
//     }
//   }
// }`

// const queries = [
//   {
//     query: myQuery,
//     transformer: ({ data }) => data.pages.nodes, // optional
//     indexName: "articles", // overrides main index name, optional
//     settings: {
//       // optional, any index settings
//       // Note: by supplying settings, you will overwrite all existing settings on the index
//     },
//     matchFields: ["path", "objectID"], // Array<String> overrides main match fields, optional
//   },
// ]

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
        name: `images`,
        path: `${__dirname}/static/images/icons`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images/logos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images/profiles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images/screenshots`,
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-source-graphcms",
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        token: process.env.GRAPHCMS_TOKEN,
        buildMarkdownNodes: true,
        downloadLocalImages: true,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-reading-time`],
      },
    },
    // {
    //   // This plugin must be placed last in your list of plugins to ensure that it can query all the GraphQL data
    //   resolve: `gatsby-plugin-algolia`,
    //   options: {
    //     appId: process.env.ALGOLIA_APP_ID,
    //     // Use Admin API key without GATSBY_ prefix, so that the key isn't exposed in the application
    //     // Tip: use Search API key with GATSBY_ prefix to access the service from within components
    //     apiKey: process.env.ALGOLIA_API_KEY,
    //     indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
    //     queries,
    //     chunkSize: 10000, // default: 1000
    //     settings: {
    //       // optional, any index settings
    //       // Note: by supplying settings, you will overwrite all existing settings on the index
    //     },
    //     enablePartialUpdates: true, // default: false
    //     matchFields: ["path", "objectID"], // Array<String> default: ['modified']
    //     concurrentQueries: false, // default: true
    //     skipIndexing: false, // default: false, useful for e.g. preview deploys or local development
    //   },
    // },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
  ],
}
