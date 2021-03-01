import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

const IconsList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex: 1;
  max-width: 5250px;
  margin-top: 3rem;
  padding-left: 0;
  li {
    display: flex;
    justify-content: center;
    img {
      margin-right: 1rem;
      width: 30%;
    }
  }
`

const Iconos = ({ wc, parking, rooms }) => {
  const { icons } = useStaticQuery(graphql`
    query {
      icons: allFile(filter: { relativeDirectory: { eq: "icons" } }) {
        edges {
          node {
            id
            publicURL
          }
        }
      }
    }
  `)

  const images = icons.edges

  return (
    <IconsList>
      <li>
        <img src={images[0].node.publicURL} alt="icon wc" />
        <p>{wc}</p>
      </li>
      <li>
        <img
          src={images[2].node.publicURL}
          alt="icon parking"
        />
        <p>{parking}</p>
      </li>
      <li>
        <img src={images[1].node.publicURL} alt="icon rooms" />
        <p>{rooms}</p>
      </li>
    </IconsList>
  )
}

export default Iconos
