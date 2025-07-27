import React from 'react'
//First you need to import three things from react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'
window.history.pushState({name:"Shanu"}, "Push state example")
console.log(window.history.state)
console.log(history)

window.history.replaceState({name:"Lavan"}, "Replace state")
console.log(window.history.state)
console.log(history)

window.addEventListener("popstate", (e)=> {
    console.log('hello')
    console.log(e)
})

const App = () => {
  return (
    <div>App</div>
  )
}

export default App