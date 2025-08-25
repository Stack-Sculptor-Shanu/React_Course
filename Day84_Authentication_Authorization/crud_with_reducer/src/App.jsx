import React from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import CreateCourse from './Components/courses/CreateCourse'
import AllCourses from './Components/courses/AllCourses'
import CourseDetails from './Components/courses/CourseDetails'
import EditCourse from './Components/courses/EditCourse'
import AllUsers from './Components/users/AllUsers'
import GetSingleUser from './Components/users/GetSingleUser'
import Login from './Components/auth/Login'
import Register from './Components/auth/Register'

const App = () => {
  const routes = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>,
          children:[
            {
              index:true,
              element:<AllCourses/>
            },
            {
              path:'/createcourse',
              element:<CreateCourse/>
            },
            {
              path:'/:id',
              element:<CourseDetails/>
            },
            {
              path:'/edit/:id',
              element:<EditCourse/>
            },
            {
              path:'/users',
              element:<AllUsers/>
            },
            {
              path:'/users/:id',
              element: <GetSingleUser/>
            }
          ]
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/signup',
          element:<Register/>
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

export default App