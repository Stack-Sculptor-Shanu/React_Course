import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <article>
        <nav className='navbar'>
          <ul>
            <li>
              <NavLink to={'/'} className={({isActive}) => (isActive? "active" :"")}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/login'} className={({isActive}) => (isActive? "active" :"")}>Login</NavLink>
            </li>
            <li>
              <NavLink to={'/signup'} className={({isActive}) => (isActive? "active" :"")}>signup</NavLink>
            </li>
          </ul>
        </nav>
      </article>
    </div>
  )
}

export default Menu