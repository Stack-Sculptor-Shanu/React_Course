import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBarMenu = () => {
  return (
    <ul>
        <li>
            <NavLink to="/" className={({isActive})=> isActive?'active':""}>Home</NavLink>
        </li>
        <li>
            <NavLink to="/createcourse" className={({isActive})=> isActive?'active':""}>Create Course</NavLink>
        </li>
    </ul>
  )
}

export default SideBarMenu