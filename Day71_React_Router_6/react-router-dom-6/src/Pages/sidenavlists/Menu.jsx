import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='side-menu'>
        <div className="logo">
            Pasmina Software Solution
        </div>
        <div className="menu">
            <ul>
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/">All users</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/players">Cricket Players</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Menu