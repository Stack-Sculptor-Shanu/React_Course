import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to= {'/login'}>Login</Link>
            </li>
            <li>
                <Link to = {'/register'}>Signup</Link>
            </li>
            <li>
                <Link to = {'/logout'}>Logout</Link>
            </li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Layout