import React from 'react'
import Root from './componenets/Root'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Dashboard from './componenets/users/Dashboard'

const App = () => {
    const router = createBrowserRouter([
        {
            path:"/",
            element:<Root/>,
            children:[
                {
                    path:"/",
                    element:<Home/>
                },
                {
                    path:'/dashboard',
                    element:<Dashboard/>,
                    children:[
                        {
                            
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