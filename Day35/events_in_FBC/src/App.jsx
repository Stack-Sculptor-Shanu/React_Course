// import React from 'react'

// const App = () => {
//   let CustomEvent = ()=>{
//     let Qsp = new Event("yClick");
//     let body = document.body;
//     body.addEventListener('yClick',e=>{
//       e.target.style.background = "red"
//     });
//     body.dispatchEvent(Qsp)
//   }
//   return (
//     <div>
//         <h1>Custom event in react</h1>
//         <button onClick={CustomEvent}>Custom</button>
//     </div>
//   )
// }

// export default App

//! if you wanna execute multiple function at a time
import React from 'react'

const App = () => {
  let show=()=>{
    console.log("I am Show")
  }
  let showOneMoreTime=()=>{
    console.log("One more time")
  }
  let showPasminaLogo=()=>{
    console.log("Logo")
  }
  return (
    <div>
      <button onClick={()=>{
        show(),
        showOneMoreTime(),
        showPasminaLogo()
      }}>click me</button>
    </div>
  )
}

export default App