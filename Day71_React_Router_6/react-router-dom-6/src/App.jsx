import React from 'react'
import Root from './componenets/Root'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Dashboard from './componenets/users/Dashboard'
import AllUsers from './componenets/users/AllUsers'
import Products from './componenets/products/Products'
import Players from './componenets/Players/Players'
import Login from './componenets/auth/Login'

const App = () => {
    const router = createBrowserRouter([
        {
            path:"/",
            element:<Root/>,
            children:[
                {
                    path:'/',
                    element:<Dashboard/>,
                    children:[
                        {
                            // path:'/all-users',
                            index:true,
                            element:<AllUsers/>
                        },
                        {
                            path:'/products',
                            element:<Products/>
                        },
                        {
                            path:'/players',
                            element:<Players/>
                        },
                        {
                            path:'/login',
                            element:<Login/>
                        }
                    ]
                }
            ]
        }
    ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App