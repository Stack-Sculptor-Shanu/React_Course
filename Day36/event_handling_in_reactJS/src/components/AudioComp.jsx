import React, { Fragment } from 'react'
import Player from './Player'

const AudioComp = ({audioArr}) => {
    console.log(audioArr)
  return (
    <div>
        {
            audioArr.map((ele,index)=>{
                return (<Fragment key={index}>
                    <Player key = {index} data = {ele}/>
                </Fragment>
                )
            })
        }
    </div>
  )
}

export default AudioComp