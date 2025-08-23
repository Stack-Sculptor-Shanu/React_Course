import React, { createContext, useContext, useEffect, useReducer } from 'react'
import userReducer from '../reducer/userReducer/userReducer'
import { userAPI_Instance } from '../axiosInstance/UserAxiosInstance'

export const UserContextApi = createContext()

const initialState = {
    users:[],
    singleUser:null,
    isLoading:true
}

const UserProvider = ({children}) => {
    let [users,dispatch] = useReducer(userReducer, initialState);

    let fetchUsers = async ()=>{
        let {data} = await userAPI_Instance.get('/users')
        dispatch({type: "fetch", payload:data, isLoading: false})
        console.log(data)
    }
    let singleUser = async (id) => {
        try {
            let {data} = await userAPI_Instance.get(`/user/${id}`)
        dispatch({type:"singleUser", singleUser:data})
        } catch (error) {
            console.log(error)
        }
    }
    return <UserContextApi.Provider value={{users,fetchUsers,singleUser}}>
        {children}
    </UserContextApi.Provider>
}
export default UserProvider
// export const UseAllUsers =()=>{
//     const {users, fetchUsers} = useContext(UserContextApi)
//     useEffect(()=>{
//         fetchUsers()
//     },[])
//     return users
// }