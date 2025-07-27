import React, { useState } from 'react'
import Child from './components/Child'
import json from './data.json'

const Parent = () => {
  // let obj = {
    // name:"Shanu",
    // salary: 10000,
    // isAvailable:true,
    // isNull: null,
    // isUndefined :undefined,
    // isSymbol : Symbol("foo")
  // }
  // let nestedObj = {
  //   frontend:{
  //     libraries:{
  //       google: 'angular',
  //       facebook : "React"
  //     }
  //   }
  // }
  // let arr = ["java","React",'Selenium','MongoDB','Node JS',"Express JS"]

  let courses = [
    {course_id:1,
      course_Name:'JavaScript',
      trainer:['Shanu','Lavan'],
      duration:1,
      price: 100000,
      branch: 'Bhubaneswar'
    },
    {
      course_id:1,
      course_Name:'React JS',
      trainer:['Shanu','Lavan'],
      duration:1,
      price: 100000,
      branch: 'Bhubaneswar'
    },
    {
      course_id:1,
      course_Name:'MongoDB',
      trainer:['Shanu','Lavan'],
      duration:1,
      price: 100000,
      branch: 'Bhubaneswar'
    }
  ]
  let [count,setCount] = useState(0)
  let incre = ()=>{
    return setCount(count+1)
  }

  let obj = {
    name:'Java FullStack',
    duration:3,
    Trainer:"Shanu",
    Loc:{
      street: 'Fire station',
      pin :752060,
      price: 20000,
      discount:{
        percent:{
          bhubaneswar_branch:80
        }
      }
    }
  }

  return (
    <div>
        {/* <Child name = "Shanu" salary = {100000} isAvailable = {false} isNull = {1} isUndefined = {undefined} isSymbol = {Symbol("Shanu")}/> */}
        {/* <Child objectProps = {obj}/> */}
        {/* <Child objectProps= {{name:"Shanu", salary: 10000, isAvailable:true, isNull: null, isUndefined :undefined, isSymbol : Symbol("foo")}}/> */}
        {/* <Child data = {courses}/> */}
        {/* <Child count = {count} increment = {incre}/> */}
        {/* <Child jsonData = {json}/> */}

        <Child {...obj}/>
    </div>
  )
}

export default Parent