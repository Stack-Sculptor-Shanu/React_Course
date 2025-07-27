import React, { Component } from 'react'
import ClassBasedComp from './components/ClassBasedComp'
import EffectHookExample from './hooks/EffectHookExample'
import { useState } from 'react'

const App = () =>{
    let [count,setCount] = useState(0)
    return (
      <div>
        <ClassBasedComp/>
        <hr />
        {count<5 &&<EffectHookExample counter = {{count,setCount}}/>}
      </div>
    )
}
export default App

