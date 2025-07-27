import React from 'react'
import Navbar from '../navbar/Navbar'
import videosrc from "../../assets/starshiplaunch.mp4"
import Contentiterator from '../../iterators/Contentiterator'
const VideoSection = () => {
    const content= {
            launchupdate:"recent launch",
            ship_name:"starship's sixth flight test",
            btn_text:"rewatch"
        }
    
  return (
    <div className='videosection'>
         <Navbar/>
    <div className="video-container">
      <video className="video-background" autoPlay loop muted playsInline>
        <source src={videosrc} type="video/mp4" />
      </video>
      <Contentiterator data={content}/>
    </div>
    </div>
  )
}

export default VideoSection