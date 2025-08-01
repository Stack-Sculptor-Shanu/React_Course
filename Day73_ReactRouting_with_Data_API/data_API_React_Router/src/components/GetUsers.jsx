import React, { Fragment } from 'react'
import { useLoaderData } from 'react-router-dom'

const GetUsers = () => {
    const data = useLoaderData()
    console.log(data)
  return (
    <div>
        {
            data.map((user)=>{
                return <Fragment key={user.id}>
                    <li>
                        <img src={user.avatar_url} alt={user.login} height={100} width={100} />
                    </li>
                </Fragment>
            })
        }
    </div>
  )
}

export default GetUsers