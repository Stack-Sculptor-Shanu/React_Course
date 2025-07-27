import React, { Component } from 'react'
import './global.css'
import NavbarContainer from './components/navbar/NavbarContainer'
import ServiceContainer from './components/services/ServiceContainer'

export default class App extends Component {
  render() {
    return (
      <>
        <NavbarContainer/>
        <ServiceContainer/>
      </>
    )
  }
}
