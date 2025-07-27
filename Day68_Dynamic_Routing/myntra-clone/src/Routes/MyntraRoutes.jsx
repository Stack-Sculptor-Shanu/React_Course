import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MyntraLayout from '../Pages/Root/MyntraLayout'
import Home from '../Pages/Home'
import CategoryContainer from '../Components/products/category/CategoryContainer'

 export const router = createBrowserRouter([
        {
            path:'/',
            element:<MyntraLayout/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'shop/:category',
                    element:<CategoryContainer/>
                }
            ]
        }
    ])

const MyntraRoutes = () => {
  return (
    <div>MyntraRoutes</div>
  )
}

export default MyntraRoutes