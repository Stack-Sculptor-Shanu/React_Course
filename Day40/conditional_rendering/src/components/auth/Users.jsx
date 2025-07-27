import React, { Fragment } from 'react'
import User from './User'

const Users = ({users}) => {
    console.log(users)
  return (
    <div>
        {
            users.map((ele)=>{
                return <Fragment key={ele.id}>
                    <User key={ele.id} {...ele}/>
                </Fragment>
            })
        }
    </div>
  )
}

export default Users