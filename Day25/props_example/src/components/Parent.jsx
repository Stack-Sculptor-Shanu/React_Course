// import React, { Component } from "react";
// import Child from "./Child";
// class Parent extends Component{
//     state = {
//             count:0
//         };

import { Component } from "react";
import Child from "./Child";

//         increment=()=>{
//             this.setState({count:this.state.count+1})
//         };
//     render(){

//         return(
//             <div>
//                 <h1>{this.state.count} from parent</h1>
//                 <Child name="Shanu" age = {30} companey = "testYantra" val={this.increment}/>
//             </div>
//         )
//     }
// }
// export default Parent

//! Props.child in CBC
// import React, { Component } from "react";
// import Child from "./Child";
// export default class Parent extends Component{
//     render(){
//         return (
//             <div>
//                 <Child courseName = "mernstack">
//                     <ul>
//                         <li>HTML</li>
//                         <li>CSS</li>
//                         <li>JS</li>
//                         <li>React</li>
//                     </ul>
//                 </Child>
//                 <Child courseName = "Java Fullstsck">
//                     <ul>
//                         <li>HTML</li>
//                         <li>CSS</li>
//                         <li>JS</li>
//                         <li>Java</li>
//                         <li>adv Java</li>
//                     </ul>
//                 </Child>
//                 <Child courseName = "Python full stack">
//                     <ul>
//                         <li>Django</li>
//                         <li>Pyton </li>
//                         <li>JS</li>
//                         <li>HTMl</li>
//                         <li>CSS</li>
//                     </ul>
//                 </Child>
//             </div>
//         )
//     }
// }

// import React from 'react'
// import Child from './Child'
// import Login from './Login'
// import Signup from './Signup'

// const Parent = () => {
//   return (
//     <div>
//         <Child>
//             <Login>
//                 <h1>I am login Page</h1>
//             </Login>

//             <Signup>
//                 <h1>I am signup page</h1>
//             </Signup>
//         </Child>
//     </div>
//   )
// }

// export default Parent


// //! Default props
// import React from 'react'
// import Child from './Child'

// const Parent = () => {
//   return (
//     <div>
//         <Child name= "Shnau" salary = {20000} job = "ASE"/>
//         <Child name= "Sailaja" job = "ASE"/>
//         <Child name= "ROhan" salary = {20000} job = "ASE"/>
//         <Child name= "Shivani" salary = {20000}/>
//     </div>
//   )
// }

// export default Parent

//! Class based default props

export default class Parent extends Component{
    render(){
        return (
            <div>
                <Child name= "Shnau" salary = {20000} job = "ASE"/>
                <Child name= "Sailaja" job = "ASE"/>
                <Child name= "ROhan" salary = {20000} job = "ASE"/>
                <Child name= "Shivani" salary = {20000}/>
            </div>
        )
    }
}