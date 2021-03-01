import React from "react"
import Layout from "../components/layout"
import BackgroundImage from "gatsby-background-image"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import useHome from "../hooks/useHome"
import heroCSS from "../css/hero.module.css"
import Section from "../components/section"
import PropertiesList from "../components/properties-list"

const CoverImage = styled(BackgroundImage)`
  height: 600px;
`

const Index = () => {
  const home = useHome()

  const { name, content, image } = home[0]

  return (
    <Layout>
      <CoverImage tag="section" fluid={image.sharp.fluid} fadeIn="soft">
        <div className={heroCSS.imagebg}>
          <div className={heroCSS.container}>
            <h1 className={heroCSS.title}>Modernist Estates</h1>
            <h2 className={heroCSS.subtitle}>FOR SALE</h2>
          </div>
        </div>
      </CoverImage>
      <main
        css={css`
          box-shadow: 2px 7px 6px -6px rgba(0, 0, 0, 0.7) inset;
        `}
      >
        <div
          className="p-5"
          css={css`
            max-width: 800px;
            margin: 0 auto;
          `}
        >
          <h1 className="text-uppercase text-center my-5">{name}</h1>
          <p className="text-center pb-4">{content}</p>
        </div>
      </main>
      <Section />
      <PropertiesList />
    </Layout>
  )
}

export default Index
