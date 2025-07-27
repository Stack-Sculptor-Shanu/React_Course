import React from 'react'

const Signup = ({children}) => {
  return (
    <div>
        <form action="" className="formdata">
            <div>{children}</div>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder='username' />
            <label htmlFor="">password</label>
            <input type="password" placeholder='password'></input>
            <button>Signup</button>
        </form>
    </div>
  )
}

export default Signup