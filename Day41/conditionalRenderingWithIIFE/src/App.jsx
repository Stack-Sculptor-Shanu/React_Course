// import React, { useState } from 'react'
// import Notifications from './components/messages/Notifications'

// const App = () => {
//     let [state,setState] = useState([
//         {
//         text: "Info text",
//         status:"info"
//         },
//         {
//         text: "Warning text",
//         status:"Warning"
//         },
//         {
//         text: "Error text",
//         status:"Error"
//         },
//     ])

//   return (
//     <div>
//         <Notifications state = {state}/>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'
import './index.css'
const App = () => {
    let [message,setMessage] = useState(['some text','shanu is learning react'])
  return (
    <div>
        <div>Messages <sup>1</sup></div>
    </div>
  )
}

export default App