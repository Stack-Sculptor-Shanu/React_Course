import React from 'react'
import NavbarContainer from './Navbar/NavbarContainer'
import { Outlet } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <section id='main-block'>
        <article className="container">
            <NavbarContainer/>
            <Toaster/>
            <hr />
            <Outlet/>
        </article>
    </section>
  )
}

export default Layout