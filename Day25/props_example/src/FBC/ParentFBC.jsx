import React from 'react'
import ChildFBC from './ChildFBC'

const ParentFBC = () => {
  return (
    <div>
        <ChildFBC name= "Shanu">
            <h1>Hii</h1>
        </ChildFBC>
        <ChildFBC name = "Sailaja">
            <h1>Hii</h1>
        </ChildFBC>
        <ChildFBC name = "Lavan">
            <h1>Hii</h1>
        </ChildFBC>
        <ChildFBC name = "Laxmi">
            <h1>Hii</h1>
        </ChildFBC>
    </div>
  )
}

export default ParentFBC