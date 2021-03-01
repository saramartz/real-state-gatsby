import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import Image from "gatsby-image"
import Layout from "./layout"
import { graphql } from "gatsby"
import PropertiesList from "./properties-list"

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto 6rem;
  width: 95%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }

  @media (max-width: 768px) {
    p {
      margin: 4rem 2.5rem 0rem;
    }
  }
  @media (max-width: 768px) {
    .page-image {
      margin: 0 auto;
    }
  }
`

const Sidebar = styled.p`
  margin-top: 4rem;
  text-align: justify;
  @media (min-width: 768px) {
    margin-top: 10.2rem;
  }
`

export const query = graphql`
  query($id: String!) {
    allStrapiPages(filter: { id: { eq: $id } }) {
      nodes {
        name
        content
        image {
          sharp: childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const PageTemplate = ({
  data: {
    allStrapiPages: { nodes },
  },
}) => {
  const { name, content, image } = nodes[0]

  return (
    <Layout>
      <main className="container pt-4">
        <Content>
          <div className="text-center">
            <h1 className="text-uppercase text-center my-5 pt-4">{name}</h1>
            <Image
              className="page-image"
              fluid={image.sharp.fluid}
              css={css`
                box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
                  0 2px 10px 0 rgba(0, 0, 0, 0.12);
                max-width: 90%;
              `}
            />
          </div>
          <Sidebar>{content} </Sidebar>
        </Content>
      </main>
      {name === "Homes for sale" && <PropertiesList />}
    </Layout>
  )
}

export default PageTemplate
