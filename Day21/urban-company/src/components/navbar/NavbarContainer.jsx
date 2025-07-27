import React, { Component } from 'react'
import Logo from './Logo'
import Search from './Search'
import Menu from './menu'

export default class NavbarContainer extends Component {
  render() {
    return (
      <section id='navbar_container'>
        <article>
            <Logo/>
            <Search/>
            <Menu/>
        </article>
      </section>
    )
  }
}
