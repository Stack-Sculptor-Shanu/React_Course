import React, { Fragment } from 'react'

const Child = ({name,duration,Trainer,Loc:{street,pin,discount:{percent:{bhubaneswar_branch}}}}) => {
  //! functions
  // console.log(props)
  //! Nested obj in arr
  // console.log(props.data)

  //! Array
  // console.log(props)
  //! Object
    // console.log(props.data.frontend.libraries)
    // let {facebook,google} = props.data.frontend.libraries
    // console.log(typeof props)
    // let {name,salary,isAvailable,isNull, isUndefined, isSymbol} = props.objectProps
    // console.log(typeof name)
    // console.log(typeof salary)
    // console.log(typeof isAvailable)
    // console.log(typeof isNull)
    // console.log(typeof isUndefined)
    // console.log(typeof isSymbol)
  return (
    <div>
        {/* {props.name}
        <p>Salary: {props.salary}</p>
        <p>IsAvailabel: {(isAvailable===true?'available':'not available')}</p>
        <p>isNull: {isNull===null?'isLoading':`${isNull}`}</p>
        <p>isUndefined: {isUndefined===undefined?'undefined':`no data`}</p>
        <p>is symbol: {isSymbol===Symbol?'Symbol function':`no data`}</p> */}
        {/* <h1>Facebbok: {facebook}</h1>
        <h1>Google: {google}</h1> */}
        {/* {props.data.map((e)=>{
          return (
            <>
            <h1>{e}</h1>
            </>
          )
        })} */}
      
      {/* {
        props.data.map((e,index)=>{
          return <Fragment key={index}>
            <h1>{e.course_Name}</h1>
            {e.trainer.map((e,index)=>{
              return <Fragment key={index}>
              <h1>{e}</h1>
              </Fragment>
            })}
            <p>{e.duration}</p>
            <p>{e.price}</p>
            <p>{e.branch}</p>
          </Fragment>
        })
      } */}
      {/* <h1>{props.count}</h1>
      <button onClick={()=>props.increment()}>Increment</button> */}

      {/* {
        props.jsonData.map((e,index)=>{
          return <Fragment key={index}>
          <h1>{e.login}</h1>
          <img src={e.avatar_url} alt="" />
          </Fragment>
        })
      } */}
      <h1>{name}</h1>
      <p>{duration}</p>
      <p>Street: {street}</p>
      <p><b>Pin</b>: {pin}</p>
      <h1>{Trainer}</h1>
      <h1>{bhubaneswar_branch}</h1>
    </div>
  )
}

export default Child