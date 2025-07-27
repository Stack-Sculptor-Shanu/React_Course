// import React, { Component } from "react";
// class Child extends Component{
//     render(){
//         console.log(this.props.name)
//         //context
//         //props
//         //state
//         //ref
//         return(
//             <div>
//                 My name is {this.props.name}
//                 My age is {this.props.age}
//                 <br />
//                 I work for {this.props.companey}
//                 {/* <button onClick={()=>this.props.val()}>Update information from child component</button> */}
//                 <button onClick={this.props.val}>Update information from child component</button>
//             </div>
//         )
//     }
// }
// export default Child

import { Component } from "react";


// //! props.child in cbc
// import React, { Component } from "react";
// export default class Child extends Component{
//     render(){
//         return (
//             <div>
//                 {/* <h1>JavaScript</h1> */}
//                 <h1>{this.props.courseName}</h1>
//                 <div>{this.props.children}</div>
//             </div>
//         )
//     }
// }

// import React from 'react'

// const Child = (props) => {
//     console.log(props)
//   return (
//     <div>
//         <h1>I am child component</h1>
//         {props.children}
//     </div>
//   )
// }

// export default Child

// //! Default props
// import React from 'react'

// const Child = ({name,job,salary}) => {
//     // console.log(props)
//   return (
//     <div>
//         <h1>{name}</h1>
//         <p>{job|| "software developer"}</p>
//         <strong>{salary+'inr'}</strong>
//     </div>
//   )
// }

// export default Child
//! Deprecated
// Child.defaultProps = {
//     name:"ShivaJI",
//     salary:"infinity",
//     job:'Serve Nation'
// }

//! Default props CBC
export default class Child extends Component{
    static defaultProps={
        name:"Sachin",
        job:'Player',
        salary: '1cr'
    }
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h3>{this.props.job}</h3>
                <p>{this.props.salary}</p>
            </div>
        )
    }
}