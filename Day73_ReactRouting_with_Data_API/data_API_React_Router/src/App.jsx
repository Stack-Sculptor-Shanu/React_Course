import {createBrowserRouter,RouterProvider} from "react-router-dom"
//Create browser router includes data API
// If browser router is not included Data API
import Home from "./components/Home"
import GetUsers from "./components/GetUsers"

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/users',
      element:<GetUsers/>,
      loader: async ()=>{
        let data = await fetch('https://api.github.com/users')
        let finaldata = await data.json()
        return finaldata
      }
    }
  ])
  return (
    <RouterProvider router={router}>App</RouterProvider>
  )
}

export default App