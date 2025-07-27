// import React from 'react'
// import Navbar from './components/navbar/Navbar'

// const App = () => {
//   return (
//     <div>
//         <Navbar/>
//     </div>
//   )
// }

// export default App

import { Component } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/navbar/Navbar";
import './global.css'
class App extends Component{
    render(){
        return (
            <article className="main">
                <Navbar/>
            </article>
        )
    }
}
export default App