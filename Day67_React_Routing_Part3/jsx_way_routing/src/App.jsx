import React from 'react'
import {BrowserRouter as Router, RouterProvider, Routes} from 'react-router-dom'
import CustomRoutes from './routes/CustomRoutes'
import Navbar from './components/Navbar/Navbar'
import { router } from './routes/NewRouteConfig'
import Footer from './components/Footer'

const App = () => {
  return (
    // <Router>
    //     <Navbar/>
    //     <hr />
    //     <CustomRoutes/>
    //     <hr />
    //     <Footer/>
    // </Router>
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App