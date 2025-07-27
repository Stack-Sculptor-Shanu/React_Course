import React, { useEffect, useState } from 'react'
import { db } from '../dbconnection';

const EffectHookExample = ({counter}) => {
    let {count,setCount} = counter
    // let [count,setCount] = useState(0);
    // console.log(document.title)
    //!Render
    // useEffect(()=>{
    //     document.title = `This title is coming from functional ${count}`
    //     console.log(document.title)
    // })
    //!Component did mount
    // useEffect(()=>{
    //     document.title = `This title is coming from functional ${count}`
    //     console.log(document.title)
    // },[])
    //!Component did update
    // useEffect(()=>{
    //     document.title = `This title is coming from functional ${count}`
    //     console.log(document.title)
    // },[count])
    //!Component will unmount
    useEffect(()=>{
        db.connect();
        return ()=>{
            db.disconnect()
        }
    },[])
  return (
    <div>
        <h1>{count} from hook based component</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default EffectHookExample