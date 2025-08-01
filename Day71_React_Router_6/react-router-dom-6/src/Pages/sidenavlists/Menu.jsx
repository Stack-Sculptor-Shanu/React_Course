import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='side-menu'>
        <div className="logo">
            Pasmina Software Solution
        </div>
        <div className="menu">
            <ul>
                <li>
                    <NavLink to="/"
                    //  style={({isActive})=>({
                    //     background: isActive? 'red':"",
                    //     borderBottom:isActive?`1px solid green`:""
                    // })}
                    // activeClassName = "selected"
                    // activeStyle = {{color:"red"}} //!Not recommended
                    >Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/" style={({isActive})=>({
                        background: isActive? 'yellow':""
                    })}>All users</NavLink>
                </li>
                <li>
                    <NavLink to="/products" style={({isActive})=>({
                        background: isActive? 'yellow':""
                    })}>Products</NavLink>
                </li>
                <li>
                    <NavLink to="/players" style={({isActive})=>({
                        background: isActive? 'yellow':""
                    })}>Cricket Players</NavLink>
                </li>
                <li>
                    <Link  to= {{
                        pathname:"/login",
                        search:"?sort=name", // a string of query string parameters
                        state:{name:"Shanu"},
                        hash:"#hash" //Suffix or prefix with hash
                    }}>Login</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Menu