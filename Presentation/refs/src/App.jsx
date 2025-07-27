// import React, { useState } from 'react'

// const App = () => {
//     let [count,setCount] = useState(0);
//     let handleChange = () =>{
//         setCount(count+1)
//     }

//     console.log('Hello I am use state')


//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={handleChange}>Increase the value</button>
//     </div>
//   )
// }

// export default App

import React, { useRef, useState } from 'react'

const App = () => {
    let inputRef = useRef('')
    // console.log(inputRef.current.value)

    let handleSubmit = (e) =>{
        e.preventDefault()
        console.log(inputRef.current.value)
    }

    console.log("Hii How are you")

  return (
    <div>
        <form>
            <input type="text" placeholder='Enter your name' ref={inputRef} />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default App