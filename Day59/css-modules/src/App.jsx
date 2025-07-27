import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
import './global.css'
import styles from './components/register.module.css'
let {shanu} = styles
console.log(shanu)

const App = () => {
  return (
    <div className='title'>
        <div className={shanu}>
            shanu is a good boy
        </div>
        <Login {...styles}/>
        <Register/>
    </div>
  )
}

export default App