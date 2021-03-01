import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import Image from "gatsby-image"
import Icons from "./icons"
import Layout from "./layout"
import { graphql } from "gatsby"

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`
const Sidebar = styled.aside`
  margin-top: 4rem;
  .price {
    font-size: 2rem;
    font-weight: bolder;
  }
  .agent {
    p {
      margin: 0;
    }
  }

  @media (min-width: 768px) {
    margin-top: 12rem;
  }
`
const Container = styled.div`
  margin: 0 5rem 5rem;
`

export const query = graphql`
  query($id: String!) {
    allStrapiProperties(filter: { id: { eq: $id } }) {
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
        image {
          sharp: childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const PropertyTemplate = ({
  data: {
    allStrapiProperties: { nodes },
  },
}) => {
  const {
    description,
    name,
    parking,
    price,
    rooms,
    wc,
    agents,
    image,
  } = nodes[0]

  return (
    <Layout>
      <Container>
        <Content>
          <main>
            <h1 className="text-center my-5 pt-5">{name}</h1>
            <Image
              fluid={image.sharp.fluid}
              css={css`
                box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
                  0 2px 10px 0 rgba(0, 0, 0, 0.12);
              `}
            />
            <p
              css={css`
                text-align: justify;
                margin-top: 3rem;
              `}
            >
              {description}
            </p>
          </main>
          <Sidebar>
            <div className="agent">
              <p className="price">$ {price}</p>
              <hr />

              <p>{agents.name}</p>
              <p>{agents.phone}</p>
              <p>{agents.email}</p>

              <Icons wc={wc} parking={parking} rooms={rooms} />
            </div>
          </Sidebar>
        </Content>
      </Container>
    </Layout>
  )
}

export default PropertyTemplate
