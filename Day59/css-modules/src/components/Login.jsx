import React from 'react'
// import './login.module.css'
import Styles from './login.module.css'
console.log(Styles)

const Login = ({shanu}) => {
  return (
    <div className={Styles.auth}>
        <div className={shanu}>
            shanu is a good boy
        </div>
        <form>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="" id="" />
            </div>
        </form>
    </div>
  )
}

export default Login