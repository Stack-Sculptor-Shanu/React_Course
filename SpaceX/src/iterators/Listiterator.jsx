import React from 'react'

const Listiterator = (props) => {
  return (
    <>
        {props.data.map((ele,index)=>{
            return <li key={index}>{ele}</li>
        })}
    </>
  )
}

export default Listiterator