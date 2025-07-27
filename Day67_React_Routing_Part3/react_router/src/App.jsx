import React from 'react'
import {createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Users from './components/Profiles/Users'
import Home from './pages/Home'

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/users' element={<Users/>}/>
            </Route>
        )
    )
  return (
    <RouterProvider router={router}>
        
    </RouterProvider>
  )
}

export default App