import React from 'react'
import NavContainer from '../Pages/sidenavlists/NavContainer'
import Dashboard from './users/Dashboard'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <section id='dashboard'>
        <article className='container'>
            <aside className="sidebar">
                <NavContainer/>
            </aside>
            <aside className="content">
                <Outlet/>
            </aside>
        </article>
    </section>
  )
}

export default Root