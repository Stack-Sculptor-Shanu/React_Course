import React from 'react'
import {useParams} from 'react-router-dom'

const CategoryContainer = () => {
    let {category} = useParams()
    console.log(category)
  return (
    <div>
        
    </div>
  )
}

export default CategoryContainer