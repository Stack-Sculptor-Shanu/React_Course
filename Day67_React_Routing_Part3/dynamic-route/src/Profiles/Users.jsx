import React from 'react'
import { Outlet, useLocation, useParams } from 'react-router-dom'
//? useParams hook returns an object of key value pairs of the dynamic params from the current URL that were matched by the route path. it returns dynamic path parameter
//? useLocation hook returns location object 

export default function Users() {
    let location  = useLocation()
    console.log(location)

    let value = useParams()
    console.log(value)
    //! using Window API to find the url things
    // console.log(window.location) 
    // console.log(window.location.protocol) 
    // console.log(window.location.pathname) 
    // console.log(window.location.origin) 
    // console.log(window.location.href)
    // console.log(window.location.hash)
    // console.log(window.location.port)
    // console.log(window.location.hostname)
    // console.log(window.location.host)
  return (
    <div>
        <h1>{value.name}</h1>
        {/* <Outlet/> */}
    </div>
  )
}
