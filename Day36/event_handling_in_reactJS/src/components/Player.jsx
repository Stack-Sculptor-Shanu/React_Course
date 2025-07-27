import React from 'react'

const Player = (props) => {
    let {videoLink,imageLink} = props.data
    console.log(videoLink)

    let handleClick=()=>{
        const audio = new Audio(videoLink)
        audio.play()
    }
  return (
    <div>
        <img src={imageLink} alt="" onClick={handleClick} />
    </div>
  )
}

export default Player