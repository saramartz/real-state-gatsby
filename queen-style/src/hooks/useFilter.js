import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const Form = styled.form`
  width: 100%;
  display: flex;
  border: 1px solid #e1e1e1;
  max-width: 1200px;
  margin: 0 auto;
  font-size: 1.3rem;
`
const Select = styled.select`
  flex: 1;
  padding: 1rem;
  appearance: none;
  border: none;
`

const useFilter = () => {
  const [category, setCategory] = useState("")

  const result = useStaticQuery(graphql`
    query {
      allStrapiCategories {
        nodes {
          name
          id
        }
      }
    }
  `)

  const categories = result.allStrapiCategories.nodes

  const filterUI = () => (
    <div
      css={css`
        padding: 0 2rem;
      `}
    >
      <Form>
        <Select onChange={e => setCategory(e.target.value)}>
          <option value="">-- Filter --</option>
          {categories.map(option => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </Select>
      </Form>
    </div>
  )

  return {
    category,
    filterUI,
  }
}

export default useFilter
