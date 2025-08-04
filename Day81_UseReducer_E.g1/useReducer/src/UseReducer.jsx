import React, { useReducer } from 'react'

// let initialState = {
//     count:0
// }

let count = 0

let reducer = (state, action) => {
    // console.log(state)
    // console.log(action)
    if(action.type === "increment"){
        return state+1
    }
}

const UseReducer = () => {
    let [state, dispatch] = useReducer(reducer, count)
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>{dispatch({type : 'increment'})}}>Increment</button>
    </div>
  )
}

export default UseReducer