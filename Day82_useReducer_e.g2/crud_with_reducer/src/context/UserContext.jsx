import React, { createContext, useReducer } from 'react'
import userReducer from '../reducer/userReducer/userReducer'
import { userAPI_Instance } from '../axiosInstance/UserAxiosInstance'

export const UserContextApi = createContext()

const initialState = {
    users:[],
    isLoading:false
}

const UserProvider = ({children}) => {
    let [users,dispatch] = useReducer(userReducer, initialState);

    let fetchUsers = async ()=>{
        let {data} = await userAPI_Instance.get('/users')
        console.log(data)
        dispatch({type: "fetch"})
    }
    return <UserContextApi.Provider value={{users,fetchUsers}}>
        {children}
    </UserContextApi.Provider>
}
export default UserProvider