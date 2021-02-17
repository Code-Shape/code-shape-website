const path = require("path")

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(
    `
      {
        pages: allGraphCmsPage {
          nodes {
            id
            content {
              markdownNode {
                childMdx {
                  body
                }
              }
            }
            seo {
              description
              image {
                url
              }
              keywords
              title
            }
            slug
            subtitle
            title
          }
        }
        posts: allGraphCmsPost(sort: { fields: date, order: ASC }) {
          edges {
            nextPost: next {
              slug
              title
            }
            page: node {
              id
              author {
                id
                name
                title
              }
              content {
                markdownNode {
                  childMdx {
                    body
                  }
                }
              }
              date: formattedDate
              excerpt
              seo {
                description
                image {
                  url
                }
                keywords
                title
              }
              slug
              title
            }
            previousPost: previous {
              slug
              title
            }
          }
        }
        projects: allGraphCmsProject(sort: { fields: date, order: ASC }) {
          edges {
            nextProject: next {
              slug
              title
            }
            project: node {
              id
              author {
                id
                name
                title
              }
              content {
                markdownNode {
                  childMdx {
                    body
                  }
                }
              }
              date: formattedDate
              excerpt
              seo {
                description
                image {
                  url
                }
                keywords
                title
              }
              slug
              title
            }
            previousProject: previous {
              slug
              title
            }
          }
        }
        categories: allGraphCmsCategory {
          nodes {
            title
            slug
            description
            id
          }
        }
      }
    `
  )

  if (data.errors) throw data.errors

  data.posts.edges.forEach(({ nextPost, page, previousPost }) => {
    createPage({
      component: path.resolve("./src/templates/article-post.tsx"),
      context: {
        id: page.id,
        page,
        previousPost,
        nextPost,
      },
      path: `/articles/${page.slug}`,
    })
  })

  data.pages.nodes.forEach(page => {
    createPage({
      component: path.resolve("./src/templates/default-page.tsx"),
      context: {
        page,
        slug: page.slug,
      },
      path: `/${page.slug}`,
    })
  })

  data.projects.edges.forEach(({ nextProject, project, previousProject }) => {
    createPage({
      component: path.resolve("./src/templates/project-page.tsx"),
      context: {
        id: project.id,
        project,
        previousProject,
        nextProject,
      },
      path: `/projects/${project.slug}`,
    })
  })

  data.categories.nodes.forEach(category => {
    createPage({
      component: path.resolve("./src/templates/category-page.tsx"),
      context: {
        category,
        slug: category.slug,
      },
      path: `/articles/categories/${category.slug}`,
    })
  })
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    GraphCMS_Post: {
      formattedDate: {
        type: "String",
        resolve: source => {
          const date = new Date(source.date)

          return new Intl.DateTimeFormat("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(date)
        },
      },
    },
    GraphCMS_Project: {
      formattedDate: {
        type: "String",
        resolve: source => {
          const date = new Date(source.date)

          return new Intl.DateTimeFormat("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(date)
        },
      },
    },
  }

  createResolvers(resolvers)
}
