import React, { useRef, useState } from 'react'
import video from './vid.mp4'

const Video = () => {
    let [play,setPlay] = useState(true)
    let [content,setContent] = useState('play')

    let videoRef = useRef()

    let playOrPause = () => {
        setPlay(!play)
        if(play == true){
            videoRef.current.play()
            setContent('pause')
        }else{
            videoRef.current.pause()
            setContent('play')
        }
    }
  return (
    <section id='videoBlock'>
        <article>
            <video src={video} ref={videoRef}></video>
            <button onClick={playOrPause}>{content}</button>
        </article>
    </section>
  )
}

export default Video