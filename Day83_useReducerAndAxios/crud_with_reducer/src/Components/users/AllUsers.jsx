import React, { Fragment, useContext, useEffect } from 'react'
// import { UseAllUsers, UserContextApi } from '../../context/UserContext'
import useFetchUser from '../../hooks/UserHook'
import Spinner from '../../Pages/spinner/Spinner'
import { Link } from 'react-router-dom'

const AllUsers = () => {
    // let {users, fetchUsers} = useContext(UserContextApi)
    // useEffect(()=>{
    //   fetchUsers()
    // },[])
    // console.log(users)
    
    // let users = UseAllUsers()
    // console.log(users)

    let {users,isLoading} = useFetchUser()
    console.log(users)
  return (
    <div>
      <h1>AllUsers</h1>
      {/* {
        users.map((e)=>{
          return <Fragment key={e.id}>
            <h1>{e.name}</h1>
          </Fragment>
        })
      } */}

      <section className="userBlock">
        <article className="container">
          <header>
            <h2>Users</h2>
          </header>
          <main>
            <table>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {
                  isLoading == true ? <Spinner/> : users?.map((user)=>(
                    <tr key={user.id}>
                      <td>
                        <img src={user.avatar} alt={user.username} height={100} width={100} />
                      </td>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td><Link to={`/users/${user.id}`}className='nav-link'>View Profile</Link></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </main>
        </article>
      </section>
    </div>
  )
}

export default AllUsers