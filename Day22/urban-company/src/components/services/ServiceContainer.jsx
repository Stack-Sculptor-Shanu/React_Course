import React, { Component } from 'react'
import LeftServices from './LeftServices'
import RightServices from './RightServices'

export default class ServiceContainer extends Component {
  render() {
    return (
        <section id="serviceBlock">
            <article className="container">
                <LeftServices/>
                <RightServices/>
            </article>
        </section>
    )
  }
}
