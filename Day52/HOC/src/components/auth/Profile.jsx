import React from 'react'
// import HOC from '../HOC'
import withFetch from '../HOC'

const Profile = ({data,loading,error}) => {
    console.log(data);

    if(loading || data=== null){
        return <>Loading.....</>
    }else{
        return(
            data.length > 0 &&
            data.map(user => {
                return (
                    <div key={user.id}>
                        <picture>
                            <img src={user.avatar_url} alt="" height={200} width={200} />
                        </picture>
                        <h2>{user.login}</h2>
                    </div>
                )
            })
        )
    }
  return (
    <div>
        <h1>{data&&data.login}</h1>
    </div>
  )
}

export default withFetch(Profile)