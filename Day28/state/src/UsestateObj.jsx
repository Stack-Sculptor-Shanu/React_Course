import React, { useState } from 'react'

const UsestateObj = () => {
    let [username,setUsername] = useState(
        {
            username:"Shanu"
        }
    )
  return (
    <div>
        <h1>{username.username}</h1>
        <button onClick={()=>setUsername({username:"Amarjeet"})}>Update Name</button>
    </div>
  )
}

export default UsestateObj