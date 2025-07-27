import React from 'react'
import LeftSideHeader from './LeftSideHeader'
import RightSideHeader from './RightSideHeader'

export default function NavbarContainer() {
  return (
    <section id='navbar'>
        <article className='container'>
            <LeftSideHeader/>
            <RightSideHeader/>
        </article>
    </section>
  )
}
