import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"
import heroCSS from "../css/hero.module.css"

const CoverImage = styled(BackgroundImage)`
  height: 400px;
`

const Section = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "22.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <CoverImage tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <div className={heroCSS.sectionbg}>
        <div className={heroCSS.container}>
          <h2 className={heroCSS.subtitle}>We believe in adding value</h2>
        </div>
      </div>
    </CoverImage>
  )
}

export default Section
