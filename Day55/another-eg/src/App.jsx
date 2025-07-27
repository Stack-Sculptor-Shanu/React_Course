import React from 'react'
import AirtelProvider from './context/AirtelContext'
import Shanu from './components/users/Shanu'
import Lavan from './components/users/Lavan'
import Sailaja from './components/users/Sailaja'

const App = () => {
  return (
    <>
    <AirtelProvider>
        <h1>Hello Shanu</h1>
        <Shanu/>
        <hr/>
        <Lavan/>
        <hr />
    </AirtelProvider>
    <Sailaja/>
    </>
  )
}

export default App