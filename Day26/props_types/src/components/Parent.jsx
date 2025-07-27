import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <Child/>
        <Child name= {1} company= "Jspiders" salary = {200000}/>
        <Child name= "dixith" company= "TestYantra" salary = {100000}/>
        <Child company= "Jspiders" salary = {200000}/>
    </div>
  )
}

export default Parent