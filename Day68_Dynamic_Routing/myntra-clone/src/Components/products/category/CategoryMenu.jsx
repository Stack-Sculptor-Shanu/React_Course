import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const CategoryMenu = () => {
    let categoryListMenu = [
        {
            id:1,
            name:'men'
        },
        {
            id:2,
            name:'women'
        },
        {
            id:3,
            name:'kids'
        },
        {
            id:4,
            name:'home&living'
        },
        {
            id:5,
            name:'beauty'
        },
        {
            id:6,
            name:'studio'
        }
    ]
  return (
    <ul className='list'>
        {
            categoryListMenu.map(category=>{
                return <li key={category.id}>
                        <Link to={`/shop/${category.name}`}>{category.name}</Link>
                    </li>
            })
        }
    </ul>
  )
}

export default CategoryMenu