import { useRoutes } from "react-router-dom"
import Home from "../components/Home"
import Login from "../components/auth/Login"
import Logoout from "../components/Logoout"
import Register from "../components/auth/Register"
import Users from "../components/profiles/Users"

// import { BrowserRouter as router, Routes, Route } from "react-router-dom"


const CustomRoutes = () => {
    const router = useRoutes([
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/logout",
            element:<Logoout/>
        },
        {
            path:"/register",
            element:<Register/>
        },
        {
            path:'/users',
            element:<Users/>
        }
    ])
  return router
}

export default CustomRoutes