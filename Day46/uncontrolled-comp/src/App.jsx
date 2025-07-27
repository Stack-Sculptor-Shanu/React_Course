// import React, { useRef } from 'react'
// // uncontrolled component
// // react ref
// // for element have to add ref attribute
// const App = () => {
//     let emailRef = useRef("")
//     let passwordRef = useRef("")

//     let handleSubmit = (e)=>{
//         e.preventDefault()
//         let email = emailRef.current.value;
//         let password = passwordRef.current.value;
//         console.log({email,password})
//     }
//   return (
//     <section id="form">
//         <article>
//             <h1>Login</h1>
//             <form>
//                 <div className='formGroup'>
//                     <label htmlFor="email">email</label>
//                     <input type="email" placeholder='email' id='email' ref={emailRef} />

//                     <label htmlFor="password">password</label>
//                     <input type="password" placeholder='password' id='password' ref={passwordRef} />
//                 </div>

//                 <div className='formGroup'>
//                     <button onClick={handleSubmit}>Login</button>
//                 </div>
//             </form>
//         </article>
//     </section>
//   )
// }

// export default App