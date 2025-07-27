import React from 'react'
import Listiterator from '../../iterators/Listiterator'

const NavList = () => {
    const listitems=["Falcon 9","Falcon Heavy","Dragon","Starship","Human Spaceflight","Rideshare","Starshield","Starlink"]
    
  return (
    <div className='navlist'>
        <ul>
           <Listiterator data={listitems}/> 
        </ul>
    </div>
  )
}

export default NavList