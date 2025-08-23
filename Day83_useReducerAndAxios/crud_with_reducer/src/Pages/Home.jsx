import React from 'react'
import SideBarMenu from './sidebarmenu/SideBarMenu'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <section id='course-container'>
        <article>
            <aside className='sidebar'>
                <SideBarMenu/>
            </aside>
            <aside className='content-wrapper'>
                <div className="content-inner">
                    <Outlet/>
                </div>
            </aside>
        </article>
    </section>
  )
}

export default Home