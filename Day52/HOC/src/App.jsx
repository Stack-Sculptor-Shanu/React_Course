// import React from 'react'
// import Profile from './components/auth/Profile'
// import Navbar from './components/Navbar/Navbar'

// const App = () => {
//   return (
//     <div>
//         <Profile/>
//         <Navbar/>
//     </div>
//   )
// }

// export default App


import React from 'react'
import Profile from './components/auth/Profile'
import User from './components/Navbar/User'
import './index.css'

const App = () => {
  return (
    <div className='flex'>
        <div className="profile">
            <Profile/>
        </div>
        <div className="user">
            <User/>
        </div>
    </div>
  )
}

export default App