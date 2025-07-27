// import {useRef} from 'react'

// const App = () => {
//     let inputRef = useRef()

//     let changeInput = () => {
//         inputRef.current.placeholder = 'Enter some text'
//         inputRef.current.style.background = 'grey'
//     }
//   return (
//     <div>
//         <input type="text" ref={inputRef} onClick={changeInput} />
//     </div>
//   )
// }

// export default App

import React from 'react'
import Video from './components/Video'
import './global.css'

const App = () => {
  return (
    <div className='videoContainer'>
        <Video/>
    </div>
  )
}

export default App