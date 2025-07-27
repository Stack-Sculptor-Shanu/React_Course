import React, { useEffect, useState } from 'react'
import Axios from './components/Axios'
import './global.css'

const App = () => {
    // let [width, setWidth] = useState(window.innerWidth)
    // const updateWidth = () => {
    //     setWidth(window.innerWidth)
    // }
    // useEffect(()=>{
    //     window.addEventListener('resize', updateWidth); //adding to the event stack
    //     //Cleanup function remove from the event stack
    //     return ()=> {
    //         window.removeEventListener("resize",updateWidth)
    //     }
    // },[width])
    // if(width>600) {
    //     window.document.body.style.background = "green"
    // }else{
    //     window.document.body.style.background = "yellow"
    // }
  return (
    <div>
        <Axios/>
    </div>
  )
}

export default App