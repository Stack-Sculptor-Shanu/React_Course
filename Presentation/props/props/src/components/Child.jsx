import React, { Fragment } from 'react'

const Child = (value) => {
    console.log(value.arraydata)
    // console.log(value.objdata?.username)
  return (
    <div>
        {/* <h1>{value.data}</h1>
        <p>{value.age}</p> */}
        {/* <h1>{value.objdata?.username}</h1> */}
        {/* <h1>{value.arraydata.join}</h1> */}
        {/* {ele.map((ele,index)=>{
            return <h1 key={index}>{ele}, {index}</h1>
        })} */}

            {value.arraydata.map((ele,index)=>{
                return (
                    <Fragment>
                        <h1>{ele.name}</h1>
                        <p>{ele.model}</p>
                        <p>{ele.color}</p>
                    </Fragment>
                )
            })}
    </div>
  )
}

export default Child