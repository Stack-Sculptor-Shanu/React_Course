import React, { useState } from 'react'
import Button from './components/Button'

const App = () => {
  let [display, setDisplay] = useState("Prajwal")

  const nameChange = ()=>{
    setDisplay("SHanu")
  }

  return (
    <div>
      <h1>{display}</h1>
        <button onClick={()=>alert("Hello Shanu")}>Click Me</button>
        <span onClick={()=>alert("Hello from span")}>Click Span</span>

        <Button onTest={()=>alert("Hello Naming event handler")}>Hii</Button>
        {/* <Button onTest="hi">Hii</Button> */}
        <Button onTest={()=>alert("Hello Naming event handler")} handleName={nameChange}/>
        {/* <Button onTest={()=>alert("Hello Naming event handler props")}>Hii Ram</Button> */}
    </div>
  )
}

export default App