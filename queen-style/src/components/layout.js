import React from "react"
import Helmet from "react-helmet"
import { Global, css } from "@emotion/react"
import Header from "./header"
import Footer from "./footer"
import Kindelserif from "../fonts/Kindelserif.ttf"
import Minion from "../fonts/Minion.ttf"


const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          @font-face {
            font-family: "Kindelserif";
            src: local("Kindelserif"), url(${Kindelserif}) format("truetype");
            font-weight: 300;
            font-style: normal;
          }
          @font-face {
            font-family: "Minion";
            src: local("Minion"), url(${Minion}) format("truetype");
            font-weight: 300;
            font-style: normal;
          }
          html {
            font-size: 18px;
            font-size: 62.5%;
            box-sizing: border-box;
            font-family: "Minion", sans-serif;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body,
          main {
            font-size: 18px;
            font-size: 1.6rem;
            font-family: "Minion", sans-serif;
            font-weight: 300;
          }
          h1 {
            font-family: "Kindelserif", sans-serif;
          }
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: "Minion", sans-serif;
            letter-spacing: 0.4rem;
          }
          p {
            font-size: 1.6rem;
            font-family: "Minion", sans-serif;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 120rem;
            margin: 0 auto;
            width: 95%;
          }
          img {
            max-width: 100%;
          }
        `}
      />
      <Helmet>
        <title>Queen Style</title>
        <meta name="description" content="Studio 79 - Best Houses" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="//db.onlinewebfonts.com/c/cb922561aa3c2db00e6146c23a32162a?family=MinionW01-CapRegular"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
          crossorigin="anonymous"
        ></link>
      </Helmet>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
