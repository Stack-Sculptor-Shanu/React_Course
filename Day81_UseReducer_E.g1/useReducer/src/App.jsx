// import { useReducer, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


// let initialState = {
//   // name:"Shanu",
//   // company:"pasmina software solution",
//   // salary:20000
//   count:0
// }

// let reducer = (state, action) => {
//   // console.log(state)
//   // console.log(action)
//   switch (action.type) {
//     case "increment": 
//     return {
//       count : state.count+1
//     };
//     case "decrement":
//       return {
//         count : state.count-1
//       }
//     default:  return state
//   }

// } 

// function App() {
//   let [state, dispatch] = useReducer(reducer, initialState)
//   // let [value,setValue] = useState('')
//   // let [state, dispatch] = useReducer(() => {}, initialState)
//   // console.log(useReducer())
//   console.log(state)
//   return (
//     <>
//       <div>
//         {/* <h1>{state.name}</h1>
//         <p>{state.company}</p> */}
//         <h1>{state.count}</h1>
//         <button onClick={()=>dispatch({type : "increment"})}>Increment</button>
//         <button onClick={()=>dispatch({type : "decrement"})}>Decrement</button>
//       </div>
//     </>
//   )
// }

// export default App



import React from 'react'
import UseReducer from './UseReducer'

const App = () => {
  return (
    <div>
      <UseReducer/>
    </div>
  )
}

export default App