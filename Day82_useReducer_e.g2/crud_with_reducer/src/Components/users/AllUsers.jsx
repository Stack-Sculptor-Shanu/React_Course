import React, { useContext } from 'react'
import { UserContextApi } from '../../context/UserContext'

const AllUsers = () => {
    let {users} = useContext(UserContextApi)
    console.log(users.users)
  return (
    <div>AllUsers</div>
  )
}

export default AllUsers