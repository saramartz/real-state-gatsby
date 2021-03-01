import React, { useState, useEffect } from "react"
import useProperties from "../hooks/useProperties"
import PropertyCard from "./property-card"
import PropertiesCSS from "../css/properties.module.css"
import useFilter from "../hooks/useFilter"

const PropertiesList = () => {
  const result = useProperties()
  const [properties] = useState(result)
  const [filtered, setFiltered] = useState([])

  const { category, filterUI } = useFilter()

  useEffect(() => {
    if (category) {
      const filter = properties.filter(
        property => property.category.name === category
      )
      setFiltered(filter)
    } else {
      setFiltered(properties)
    }
  }, [category, properties])

  return (
    <>
      <h3 className="my-5 pt-5 text-center">OUR PROPERTIES</h3>

      <div className={PropertiesCSS.container}>
        {filterUI()}
        <ul className={PropertiesCSS.properties}>
          {filtered.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default PropertiesList
