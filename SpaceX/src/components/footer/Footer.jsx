import React from 'react'
import Listiterator from '../../iterators/Listiterator'

const Footer = () => {
    const footeritems=["SpaceX © 2024","PRIVACY POLICY", "SUPPLIERS"]
  return (
    <footer>
        <ul>
            <Listiterator data={footeritems}/>
        </ul>
    </footer>
  )
}

export default Footer