import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    const users = [
        {
            id:1,
            name:"Shanu",
            companu:"Pasmina Software Solution"
        },
        {
            id:2,
            name:"Lavan",
            companu:"Qspiders"
        },
        {
            id:3,
            name:"Babygirl",
            companu:"Pasmina Software Solution"
        }
    ]
  return (
    <div>
        <ul>
            <li>
                <Link to = '/'>Home</Link>
            </li>
            <li>
                <Link to= '/users'>
                    {
                        users.map(user => {
                            return <Fragment key={user.id}>
                                <li>
                                    <Link to={`/users/${user.name}`}>{user.name}</Link>
                                </li>
                            </Fragment>
                        })
                    }
                </Link>
            </li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Layout