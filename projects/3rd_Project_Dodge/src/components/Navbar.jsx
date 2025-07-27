import React from 'react'
import logo from '../assets/NavAssets/dodge-garage-logo.png'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="menu">
                <ul>
                    <li>dodge.com</li>
                    <li>dcperformance.com</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar