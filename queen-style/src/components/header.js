import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Navigation from "./navigation"
import { css } from "@emotion/react"

const Header = () => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo2.png" }) {
        publicURL
      }
    }
  `)

  return (
    <header
      css={css`
        background-color: #151414;
        padding: 0 1rem;
      `}
    >
      <div
        css={css`
          max-width: 120rem;
          margin: 0 auto;
          text-align: center;

          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <Link to={"/"}>
          <div>
            <img src={logo.publicURL} alt="Logo" width="90px" />
          </div>
        </Link>

        <Navigation />
      </div>
    </header>
  )
}

export default Header
