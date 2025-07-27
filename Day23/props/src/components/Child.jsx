import React from 'react'

const Child = (props) => {
    console.log(props)
    console.log(typeof props)
    let {name,salary} = props
  return (
    <div>
        {props.name}
        <p>Salary: {props.salary}</p>
    </div>
  )
}

export default Child