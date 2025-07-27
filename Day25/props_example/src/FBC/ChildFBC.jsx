import React from 'react'

const ChildFBC = (props) => {
    console.log(props)
  return (
    <div>
        <h1>{props.name}</h1>
        <div>{props.children}</div>
    </div>
  )
}

export default ChildFBC