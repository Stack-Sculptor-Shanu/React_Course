import PropTypes from 'prop-types'
// console.log(PropTypes)
import React from 'react'

const Child = (props) => {
    console.log(props.name)
  return (
    <div>Child</div>
  )
}

export default Child
Child.propTypes={
    name: PropTypes.string,
    company:PropTypes.string,
    salary: PropTypes.number
}