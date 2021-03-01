import React from "react"
import Icons from "./icons"
import styled from "@emotion/styled"
import Image from "gatsby-image"
import { Link } from "gatsby"
import urlSlug from "url-slug"

const Button = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #000000;
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 0.2rem;
  font-family: "Minion", sans-serif;
  font-size: 1.3rem;
  @media (min-width: 680px) {
    font-size: 1.1rem;
  }

  &:hover {
    color: #bcbdbf;
  }
`

const Card = styled.div`
  border: 0.5px solid #cacaca;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  img {
    max-width: 100%;
  }
`
const Content = styled.div`
  padding: 2rem;
  h4 {
    margin: 0 0 1rem 0;
    letter-spacing: 0.1rem;
    font-size: 1.8rem;

    @media (min-width: 680px) {
      font-size: 1.6rem;
    }
  }
  .price {
    font-weight: bolder;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const PropertyCard = ({ property }) => {
  const { name, image, wc, parking, rooms, price } = property

  return (
    <Card>
      <Image fluid={image.sharp.fluid} />
      <Content>
        <Container>
          <h4 className="text-center">{name}</h4>

          <h4 className="price">£ {price} </h4>
        </Container>
        <Icons wc={wc} parking={parking} rooms={rooms} />
        <Button to={`/${urlSlug(name)}`}>View</Button>
      </Content>
    </Card>
  )
}

export default PropertyCard
