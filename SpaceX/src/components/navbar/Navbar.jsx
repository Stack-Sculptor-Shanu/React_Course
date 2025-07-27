import React from 'react'
import Logo from './Logo'
import NavList from './NavList'
import Menubar from './Menubar'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Logo/>
        <NavList/>
        <Menubar/>
    </div>
  )
}

export default Navbar