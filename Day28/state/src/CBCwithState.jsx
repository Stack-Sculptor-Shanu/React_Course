// import React, { Component, Fragment } from 'react'

// export default class CBCwithState extends Component {
//     state = {
//         languages : ["java","nodeJS","MongoDB","React","redux","react query"]
//     }
//     constructor(){
//         super()
//         let x = 2+2;
//         console.log(x)
//     }
//   render() {
//     console.log(this.state)
//     return (
//       <div>
//         {
//             this.state.languages.map((val,index)=>{
//                 return <Fragment key={index}>
//                     <li>{val}</li>
//                 </Fragment>
//             })
//         }
//       </div>
//     )
//   }
// }


//! Same thing using functional based comp
// import React, { Fragment, useState } from 'react'

// const CBCwithState = () => {
//     let [state,setState] = useState(["java","nodeJS","MongoDB","React","redux","react query"]);
//   return (
//     <div>
//         {
//             state.map((e,val)=>{
//                 return <Fragment key={val}>
//                     <li>{e}</li>
//                 </Fragment>
//             })
//         }
//     </div>
//   )
// }

// export default CBCwithState


//! Boolean value in CBC
// import React, { Component } from 'react'

// export default class CBCwithState extends Component {
//     state = {
//         isavailable:true,

//     }
//   render() {
//     if(this.state.isavailable == true){
//         return(
//             <>
//                 <h1>Yes I am available</h1>
//             </>
//         )
//     }else{
//         return(
//             <>
//                 <h1>I am not available on the internet</h1>
//             </>
//         )
//     }
//   }
// }

//! Boolean value in FBC
// import React, { useState } from 'react'

// const CBCwithState = () => {
//     let [isOnline, setIsOnline] = useState(false)
//     if(isOnline == true){
//         return<>
//             <h1>Yes I am online</h1>
//         </>
//     }else{
//         return<>
//         <h1>I am not online</h1>
//         </>
//     }
// }

// export default CBCwithState

//! null in cbc
// import React, { Component } from 'react'

// export default class CBCwithState extends Component {
//     state = {
//         isavailable:null,

//     }
//   render() {
//     if(this.state.isavailable == null){
//         return(
//             <>
//                 <h1>Loading...</h1>
//             </>
//         )
//     }else{
//         return(
//             <>
//                 <h1>I am not available on the internet</h1>
//             </>
//         )
//     }
//   }
// }

//! undefined with CBC
// import React, { Component } from 'react'

// export default class CBCwithState extends Component {
//     state = {
//         isavailable:undefined,

//     }
//   render() {
//     if(this.state.isavailable == undefined){
//         return(
//             <>
//                 <h1>Loading...</h1>
//             </>
//         )
//     }else{
//         return(
//             <>
//                 <h1>I am not available on the internet</h1>
//             </>
//         )
//     }
//   }
// }

import React, { Component } from 'react'

export default class CBCwithState extends Component {
    state = {
        firstName:"Shanu",
        lastName: "Kumar",
        company: "TestYantra",
        skills:["JS","React","Node"],
        isHired:true
    }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}, {this.state.lastName}</h1>
        <p>{this.state.company}</p>
        <p>isHire : {this.state.isHired===true?"yes I am hired":"hire me"}</p>
        <p>My Skills are <ul>
            {this.state.skills.map((e,index)=>{
                return <li key={index}>{e}</li>
            })}
            </ul></p>
      </div>
    )
  }
}
