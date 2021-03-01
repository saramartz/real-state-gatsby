import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  align-items: center;

  @media (min-width: 768px) {
    padding: 0;
    flex-direction: row;
  }
`

const NavLink = styled(Link)`
  color: #bcbdbf;
  font-weight: 300;
  font-family: "Raleway", sans-serif;
  text-decoration: none;
  padding: 0.5rem;
  margin: 0.8rem;
  letter-spacing: 0.3rem;
  width: 40%;
  font-size: 1.2rem;
  font-family: "Minion", sans-serif;
  &.showActive {
    border-bottom: 1px solid #bcbdbf;
  }
  &:hover {
    color: #666666;
  }
`

const Navigation = () => {
  return (
    <Nav>
      <NavLink to={"/"} activeClassName="showActive">
        Home
      </NavLink>
      <NavLink to={"/about"} activeClassName="showActive">
        About
      </NavLink>
      <NavLink to={"/homes-for-sale"} activeClassName="showActive">
        Buy
      </NavLink>
    </Nav>
  )
}

export default Navigation
