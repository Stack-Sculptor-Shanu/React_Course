import React, { useState } from 'react'
//controlled component
//initialize state object
//add value attribute to the input or form elements
//state mutation or state update add onChange event to the elements

const Controlled = () => {
    let [email,setEmail]= useState('')
    let [password,setPassword] = useState('')
    let handleSubmit = (e)=>{
        e.preventDefault()
        console.log({email,password})
    }
  return (
    <div>
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder='Enter mail' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button>Login</button>
        </form>
    </div>
  )
}

export default Controlled