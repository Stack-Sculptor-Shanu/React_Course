import React from 'react'
import Child from './Child'

const Parent = () => {
    let emp_details = {
        username:"Chandana",
        age:109,
        role:"ASE"
    }
    var cars = [
        {name:"dodge",
            model: "demon 170",
            color: "blood splatter"
        },
        {
            name:"ford",
            model: "Mustang GT",
            color: "Carbon black"
        },
        {
            name:"Supra",
            model: "MK 4",
            color: "White"
        }
    ]
  return (
    <div>
        {/* <Child data = "Shanu"/>
        <Child age = {23}/> */}
        <Child arraydata = {[...cars]}/>
    </div>
  )
}

export default Parent