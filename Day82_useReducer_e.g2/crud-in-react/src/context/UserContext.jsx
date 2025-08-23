import React, { createContext, useReducer } from 'react'
import UserReducer from '../reducer/UserReducer'
import { userAPIInstance } from '../userInstance/userInstance'

export const UserContextAPI = createContext()
const initialState = {
    users: [],
    isLoading:false
}

const UserContext = ({children}) => {
    let [users,dispatch] = useReducer(UserReducer, initialState)
    let fetchusers = async () => {
        let {data} = await userAPIInstance.get('/users')
        console.log(data)
    }
  return (
    <UserContextAPI.Provider value={{users, fetchusers}}>{children}</UserContextAPI.Provider>
  )
}

export default UserContext