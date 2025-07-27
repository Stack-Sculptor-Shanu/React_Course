import React, { Component } from 'react'
import logo from '../../Assets/logo.webp'

export default class Logo extends Component {
  render() {
    return (
      <div className='logoblock'>
        <a href="">
            <span>
                <picture>
                    <img src={logo} alt="logo" />
                </picture>
            </span>
        </a>
      </div>
    )
  }
}
