import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <main className='dashboard-content'>
        <ul>
          <li>
            <NavLink to='/' state={{name:"Shanu",company:"TestYantra",salarY:20000}} className={({isActive})=> (isActive === true? 'active':'')}>All users</NavLink>

            <NavLink to='/products' state={{name:"Lavan",company:"Pasmina Software Solution",salarY:40000}} className={({isActive})=> (isActive === true? 'active':'')}>Products</NavLink>
            
            <NavLink to='/players' state={{name:"Sailaja",company:"Pasmina Software Solution",city:"Lakhisarai"}} className={({isActive})=> (isActive === true? 'active':'')}>Players</NavLink>
          </li>
        </ul>
      </main>
      <Outlet/>
    </div>
  )
}

export default Dashboard