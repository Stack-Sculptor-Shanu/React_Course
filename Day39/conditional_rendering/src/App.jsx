// import React, { Fragment, useState } from 'react'

// const App = () => {
//     let [state,setState] = useState(true);
//     // if(condition){logic}else{statement}

//     if(state){
//         return(
//             <Fragment>
//                 <h1>Hello Welcome to Pasmina Software Solution</h1>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, vero fugiat! Voluptatibus accusamus ipsum laudantium repudiandae molestias harum, ullam saepe. Ullam fugit ex officiis officia, neque, doloribus numquam placeat error a dignissimos voluptatem iure culpa ut corporis soluta praesentium in cupiditate quaerat? Itaque, repudiandae soluta.</p>
//             </Fragment>
//         )
//     }else{
//         return(
//             <Fragment>
//                 <h1>No data available</h1>
//             </Fragment>
//         )
//     }
// }

// export default App

//! Conditional rendering
import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './index.css'

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
  return (
    <div>
        <Navbar data={{isLoggedIn,setIsLoggedIn}}/>
    </div>
  )
}

export default App