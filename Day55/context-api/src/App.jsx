// import React, { createContext } from 'react'
// import UserProvider from './Context/userContext'

import Profile from "./components/users/Profile"
import UserProvider from "./Context/userContext"


const App = () => {
    // let namah = createContext('shanu')
    // console.log(namah)
  return (
    <UserProvider>
        <Profile/>
    </UserProvider>
  )
}

export default App