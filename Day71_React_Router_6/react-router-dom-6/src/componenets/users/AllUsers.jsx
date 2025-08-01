import React, { Fragment, useState } from 'react'
import userdata from '../../userData.json'
import { Link, useLocation } from 'react-router-dom'

const AllUsers = () => {
  let [users,setusers] = useState(userdata)
  const {state} = useLocation()
  console.log(state)
  return (
    <main>
      <div className='users'>
        {
          users.map.length>0 && users.map((ele)=>{
            return <Fragment key={ele.id}>
              <div className="container">
                <figure>
                  <picture>
                    <img src={ele.avatar_url} alt={ele.login} height={150} width={150} />
                  </picture>
                  <Link to={`/${ele.login}`} state={ele}>View More</Link>
                </figure>
              </div>
            </Fragment>
          })
        }
      </div>
    </main>
  )
}

export default AllUsers