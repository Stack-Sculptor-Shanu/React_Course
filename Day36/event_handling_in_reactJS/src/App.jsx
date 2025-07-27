import React from 'react'
import AudioComp from './components/AudioComp'
import mashuka from './components/mashuka.mp4'
import pataNahi from './components/pataNahi.mp4'

const App = () => {
    const audioArr = [
        {
            videoLink:mashuka,
            imageLink:'https://images.unsplash.com/photo-1603982448671-ff30899d7011?q=80&w=1253&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },  
        {
            videoLink:pataNahi,
            imageLink:"https://plus.unsplash.com/premium_photo-1671493286575-273500e65fa7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBhdGElMjBuYWhpfGVufDB8fDB8fHww"
        }
    ]
  return (
    <div>
        <AudioComp audioArr = {audioArr}/>
    </div>
  )
}

export default App