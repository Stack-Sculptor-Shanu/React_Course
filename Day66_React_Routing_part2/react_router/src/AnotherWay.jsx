// Version 6.4 onwards data API
// if you need data API follow below syntax

//CreateBrowser router enables data APIs like loaders, actions and fetcher and many more
//! Version 6.0 only added history APIs without any data API's
import {createBrowserRouter, RouterProvider, Link, Route, Routes} from 'react-router-dom'
import Layout from './Layout'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Users from './components/Profiles/Users'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const AnotherWay = () => {
    const routes = createBrowserRouter([
        {
            path:'/',
            element:<Layout/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/login',
                    element:<Login/>
                },
                {
                    path:'/register',
                    element:<Register/>
                },
                {
                    path:'/users',
                    element:<Users/>
                },
                {
                    path:"*",
                    element:<NotFound/>
                }
            ]
        }
    ])
  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default AnotherWay