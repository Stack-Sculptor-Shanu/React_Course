//! How to create a state in FBC
// import React from 'react'

// const FBC = () => {
//     const username = React.useState("Pratap")
//   return (
//     <div>My name is {username}</div>
//   )
// }

// export default FBC


//! mutation in FBC
import { useState } from "react"
const FBC = ()=>{
    //! Usestate is react hook that allows you to add the state to the functional based component and it returns an array with two values first is initial value and teh secpnd is function to update teh initial state
    // console.log(useState())
    // let array = [undefined, function(){}]
    // console.log(array)

    const [state,setState] = useState("shanu")
    console.log(state)

    //! Internal of usestate
    function dispatchSetState(initialVal, updaterfn){
        return [initialVal, updaterfn]
    }
    let x = dispatchSetState("Shanu",()=>{})
    console.log(x)

    let [u,setU] = x;
    console.log(u)
    return (
        <>
            <h1>{state}</h1>
            <button onClick={()=> setState("Sailaja")}>Update Name</button>
        </>
    )
}
export default FBC