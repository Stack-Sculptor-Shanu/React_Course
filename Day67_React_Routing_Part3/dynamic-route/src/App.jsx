import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import Users from './Profiles/Users'
import NotFound from './Pages/NotFound'

let router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                //Path parameter or usepararms dynamic path
                path:'/users/:name',
                element:<Users/>
            },
            {
                path:'*',
                element:<NotFound/>
            }
        ]
    }
])

const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App