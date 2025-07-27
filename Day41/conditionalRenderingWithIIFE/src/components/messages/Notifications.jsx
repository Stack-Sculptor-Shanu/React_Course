import React, { Fragment } from 'react'
import Info from './Info'

const Notifications = ({state}) => {
    // console.log(state)
  return (
    <div>
        {
            state.map((e,index)=>{
                return <Fragment key={index}>
                    <Info key={index}{...e}/>
                </Fragment>
            })
        }
    </div>
  )
}

export default Notifications