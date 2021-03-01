const urlSlug = require("url-slug")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allStrapiPages {
        nodes {
          name
          id
        }
      }
      allStrapiProperties {
        nodes {
          name
          id
        }
      }
    }
  `)

  // If no results
  if (result.errors) {
    reporter.panic("No results", result.errors)
  }
    
  
  // If results, generate static pages
  const pages = result.data.allStrapiPages.nodes
  const properties = result.data.allStrapiProperties.nodes

  // Create pages template
  pages.forEach(page => {
    actions.createPage({
      path: urlSlug(page.name),
      component: require.resolve("./src/components/page-template.js"),
      context: {
        id: page.id,
      },
    })
  })

  // Create properties template
  properties.forEach(property => {
    actions.createPage({
      path: urlSlug(property.name),
      component: require.resolve("./src/components/property-template.js"),
      context: {
        id: property.id,
      },
    })
  })
}
