import React from 'react'

const App = () => {
    let handleEventsinReact=()=>{
        alert("Hello React events")
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(e)
        console.log("Hello React")
    }
  return (
    <div>
        <h1>Hello</h1>
        {/* Don't use invoking operator while giving function name */}
        {/* <button onClick={handleEventsinReact}>Click</button> */}
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter some text" id="input"/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default App