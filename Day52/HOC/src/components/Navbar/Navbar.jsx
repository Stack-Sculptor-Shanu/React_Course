import React from 'react'
import HOC from '../HOC'

const Navbar = ({profile}) => {
  return (
    <div>
        <h1>Navbar</h1>
        <h2>{profile.company}</h2>
    </div>
  )
}

export default HOC(Navbar)