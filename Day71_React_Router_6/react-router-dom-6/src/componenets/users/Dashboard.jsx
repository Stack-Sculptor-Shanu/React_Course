import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <main className='dashboard-content'>
        <ul>
          <li>
            <Link to='/' state={{name:"Shanu",company:"TestYantra",salarY:20000}}>All users</Link>
            <Link to='/products' state={{name:"Lavan",company:"Pasmina Software Solution",salarY:40000}}>Products</Link>
            <Link to='/players' >Players</Link>
          </li>
        </ul>
      </main>
      <Outlet/>
    </div>
  )
}

export default Dashboard