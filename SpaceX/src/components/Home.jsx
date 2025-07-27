import React from 'react'
import Navbar from './navbar/Navbar'
import VideoSection from './videoplayer/VideoSection'
import ImageSection from './imagesection/ImageSection'
import astronaut from "../assets/astronaut.jpg"
import launch from "../assets/launch.jpg"
import rocket_fire from "../assets/rocket-fire.jpg"
import starlink from "../assets/Starlink.jpg"
import stars from "../assets/stars.jpg"
import Footer from './footer/Footer'
const Home = () => {
    const imagecontent=[
        {
            image:rocket_fire,
            content:{
                launchupdate:"recent launch",
                ship_name:"SXM-9 Mission",
                btn_text:"watch"
            }
        },
        {
            image:stars,
            content:{
                launchupdate:"recent launch",
                ship_name:"Starlink Mission",
                btn_text:"rewatch"
            }
        },
        {
            image:starlink,
            content:{
                launchupdate:"recent launch",
                ship_name:"Starlink Mission",
                btn_text:"rewatch"
            }
        },
        {
            image:astronaut,
            content:{
                launchupdate:null,
                ship_name:"ADVANCING HUMAN SPACEFLIGHT",
                btn_text:"learn more"
            }
        },
        {
            image:launch,
            content:{
                launchupdate:null,
                ship_name:"TO MAKE LIFE MULTIPLANETARY",
                btn_text:"learn more"
            }
        },
       
    ]
  return (
    <div className='home'>
       
        <VideoSection/>
        {
            imagecontent.map((ele,index)=>{
                return(
                    <>
                     <ImageSection data={ele}/>
                    </>
                )
            })
        }
        <Footer/>
    </div>
  )
}

export default Home