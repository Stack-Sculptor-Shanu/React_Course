//! Hooks are JS functions
//! Only call hooks at teh top level
//! Don't call hooks inside loops, conditions or nested functions
//! Don't call hooks from regular JS functions instead you can call
//? Call hooks from teh react functions component
//? Call hooks from custom Hoks
//? Create or use hooks starts with ----use----

import React, { useState } from 'react'
//calling hooks here
// let [state,setState] = useState()  ❌
// Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
// 1. You might have mismatching versions of React and the renderer (such as React DOM)
// 2. You might be breaking the Rules of Hooks
// 3. You might have more than one copy of React in the same app

const App = () => {
  // let [state,setaState] = useState() //✅
  //! it is not suggested to use the hook inside the loop because it will rerender the loop again and again
  // for(let i = 0; i<=100; i++){
  //   let [state,setState] = useState()
  // }

  //! React hook 'usestate' is called conditionally. React Hooks must be called in the exact same order in every component render
  // if(true){
  //   let [name,setname] = useState('shanu')
  // }else{
  //   console.log("hello")
  // }
  
  //! React Hooks 'usestate' is called in function 'y' that is neither a react function component nor a custom react hook function. React component names must start with an uppercase letter. React hooks names must start with the word 'use'
  (()=>{
    let x = () => {
      let y = () => {
        console.log("Nested function")
        let [value, setValue] = useState("Shanu")
        console.log(value)
      };
      y()
    }
    x()
  })();

  return (
    <div>
      <h1>Hooks</h1>
    </div>
  )
}

export default App