import React, { Fragment, useState } from 'react'
import userdata from '../../userData.json'
import { useLocation } from 'react-router-dom'

const AllUsers = () => {
  let [state,setstate] = useState(userdata)
  const data = useLocation()
  console.log(data)
  return (
    <div className='users'>
      {
        state.map.length>0 && state.map((ele)=>{
          return <Fragment key={ele.id}>
            <div className="container">
              <figure>
                <picture>
                  <img src={ele.avatar_url} alt={ele.login} height={150} width={150} />
                </picture>
              </figure>
            </div>
          </Fragment>
        })
      }
    </div>
  )
}

export default AllUsers