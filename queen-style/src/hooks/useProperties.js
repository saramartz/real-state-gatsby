import { graphql, useStaticQuery } from "gatsby"

const useProperties = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiProperties {
        nodes {
          description
          id
          name
          parking
          price
          rooms
          wc
          agents {
            email
            name
            phone
          }
          category {
            name
          }
          image {
            sharp: childImageSharp {
              fluid(maxWidth: 650, maxHeight: 400) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return data.allStrapiProperties.nodes
}

export default useProperties