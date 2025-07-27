import React from 'react'
// import './register.css'
import * as Styles from './register.module.css'
console.log(Styles)
let {auth,blue,red,green}= Styles


const Register = () => {
  return (
    <div className={Styles.auth}>
        <h1>Register</h1>
        <form className={Styles.form} style={{background:Styles.blue}}>
            <div>
                <label htmlFor="email" className={Styles.label} style={{color:red}}>Email</label>
                <input type="email" placeholder='enter your mail' className={Styles.input} />
            </div>
            <div>
                <label htmlFor="password" className={Styles.label}>password</label>
                <input type="password" placeholder='enter password' className={Styles.input} />
            </div>
        </form>
    </div>
  )
}

export default Register