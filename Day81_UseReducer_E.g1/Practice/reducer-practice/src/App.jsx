import React, { useReducer } from 'react'

let initialVal = 0;
let reducer = (state,action) => {
    console.log(state)
    console.log(action)
    switch(action.type){
        case "Increment":
            return state+1
    }
}

const App = () => {
    let [state, dispatch] = useReducer(reducer, initialVal)
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>{dispatch({type:"Increment"})}}>Increment</button>
    </div>
  )
}

export default App