import React, { createRef } from 'react'

const FunctionBased = () => {
    let usernameRef = createRef()
    let passwordRef = createRef()
    let btnRef = createRef()

    let formData = (e) =>{
        e.preventDefault()
        let username = usernameRef.current.value;
        let password = passwordRef.current.value;
        console.log({username,password})
    }
  return (
    <div>
        <form action="">
            <input type="text" id='username' placeholder='username' ref={usernameRef} />
            <input type="password" id='password' placeholder='password' ref={passwordRef} />
            <button onClick={formData}>submit</button>
        </form>
    </div>
  )
}

export default FunctionBased