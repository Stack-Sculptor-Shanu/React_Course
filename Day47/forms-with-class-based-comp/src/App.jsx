// import React, { Component, createRef } from 'react'
// //uncontrolled component
// // add ref to the element
// //

// export default class App extends Component {
//   emailRef = createRef("")
//   passwordRef = createRef('')
//   handleSubmit = (e)=>{
//     e.preventDefault()
//     let email = this.emailRef.current.value;
//     let password = this.passwordRef.current.value;
//     console.log({email,password})
//   }
//   render() {
//     return (
//       <div>
//         <h1>Login</h1>
//         <form>
//           <div className="formGroup">
//             <label htmlFor="email">email</label>
//             <input type="email" placeholder='email' id='email' ref={this.emailRef} />
//             <label htmlFor="password"></label>
//             <input type="password" placeholder='password' id='password' ref={this.passwordRef} />
//           </div>
//           <div className="formGroup">
//             <button onClick={this.handleSubmit}>submit</button>
//           </div>
//         </form>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'
// //Controlled Form

// export default class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       email:"",
//       password:"",
//       loading: false
//     }
//   }

//   handleChange = (e)=>{
//     console.log(e.target.value)
//     // this.setState({email:e.target.value})
//     this.setState({[e.target.name]:e.target.value})
//   }
//   handleSubmit = (e)=>{
//     e.preventDefault()
//     // this.setState({loading:true})
//     console.log(this.state)

//   }
//   render() {
//     return (
//       <div>
//         <h1>Login Form</h1>
//         <form>
//           <div className="form-group">
//             <label htmlFor="email">email</label>
//             <input type="email" placeholder='enter your email' name="email" id="email" value={this.state.email} onChange={this.handleChange} />

//             <label htmlFor="password">Password</label>
//             <input type="password" placeholder='enter your password' name='password' id='password' value={this.state.password} onChange={this.handleChange} />
//           </div>

//           <div className="form-group">
//             <button onClick={this.handleSubmit}>{this.state.loading===true? 'loading': 'login'}</button>
//           </div>
//         </form>
//       </div>
//     )
//   }
// }


//! Functional component
import React, { useState } from 'react'

const App = () => {
  let [state,setState] = useState({
    email:"",
    password:"",
    loading:false
  })

  let {email,password,loading} = state

  let handleChange = e=>{
    let {name,value} = e.target
    setState({...state, [name]:value})
  }

  let handleSubmit = e =>{
    e.preventDefault()
    console.log({email,password})
  }

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input type="email" value={email} name='email' placeholder='email' id='email' onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">password</label>
          <input type="password" value={password} name='password' placeholder='password' id='password' onChange={handleChange} />
        </div>
        <div className="form-group">
          <button>{loading?'loading':'submit'}</button>
        </div>
      </form>
    </div>
  )
}

export default App