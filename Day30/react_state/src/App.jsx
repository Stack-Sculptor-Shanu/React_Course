// import React, { Component, Fragment, useState } from 'react'
// import './style.css'
// import JSON from './data.json'

// const App =()=> {
//     let [state,setState]= useState({courses:JSON})
//     console.log(state)
//     return (
//       <div>
//         <section id='courseblock'>
//         <article>
//             <main>
//                 <header>
//                     <h2>List of Courses</h2>
//                 </header>
//                 <aside className='container'>
//                     {
//                         courses.map((course)=>{
//                             return(
//                                 <Fragment key={course.course_id}>
//                                     <div className="list">
//                                         <h2>{course.course_name}</h2>
//                                         <p><span>Branch</span><span>{course.branch}</span></p>
//                                         <p><span>duration:</span><span>{course.duration+" months"}</span></p>
//                                         <p><span>price:</span>
//                                         <span>{course.price} &#8377;</span>
//                                         </p>
//                                         <p>
//                                             <span>trainers: </span>
//                                             <div>{course.trainers.map((e,index)=>{
//                                                 return <Fragment key={index}>
//                                                     <p>{e}</p>
//                                                 </Fragment>
//                                             })}</div>
//                                         </p>

//                                         <span>Frontend Technologies</span>
//                                         <div className='c'>
//                                             {
//                                                 course.course_Details.frontend.map((front,index)=>{
//                                                     return <Fragment key={index}>
//                                                         <span>{front}</span>
//                                                     </Fragment>
//                                                 })
//                                             }
//                                         </div>

//                                         <span>Backend Technologies</span>
//                                         <div className='c'>
//                                             {
//                                                 course.course_Details.backend.map((back,index)=>{
//                                                     return <Fragment key={index}>
//                                                         <span>{back}</span>
//                                                     </Fragment>
//                                                 })
//                                             }
//                                         </div>

//                                         <span>Database Technologies</span>
//                                         <div className='c'>
//                                             {
//                                                 course.course_Details.database.map((db,index)=>{
//                                                     return <Fragment key={index}>
//                                                         <span>{db}</span>
//                                                     </Fragment>
//                                                 })
//                                             }
//                                         </div>
//                                     </div>
//                                 </Fragment>
//                             )
//                         })
//                     }
//                 </aside>
//             </main>
//         </article>
//         </section>
//       </div>
//     )
//   }
//   export default App


// import React, { Component } from 'react'

// export default class App extends Component {
//     state = {
//         name:"Shanu",
//         count:0,
//         loading:false
//     }
//     Increment=()=>{
//         this.setState({count:this.state.count+1, loading: true})

//     }
//     Decrement=()=>{
//         this.setState({count:this.state.count-1, loading: true, name:"Sailaja"})

//     }
//     Reset=()=>{
//         this.setState({count:0, loading: true, name:"Lavan"})

//     }
//   render() {
//     return (
//       <div>
//         <p>Increment/Decrement done by <strong>{this.state.name}</strong></p>
//         <h1>{this.state.count}</h1>
//         <div className="btngroup">
//             <button onClick={this.Increment}>Increment</button>
//             <button onClick={this.Decrement}>Decrement</button>
//             <button onClick={this.Reset}>Reset</button>
//         </div>
//       </div>
//     )
//   }
// }


//! using FBC
// import React, { useState } from 'react'

// const App = () => {
//     const [state, setState] = useState(
//         {
//             name:"Shanu",
//             loading:true,
//             count:0
//         }
//     )

//     let Increment=()=>{
//         setState({count:state.count+1})
//     }
//     let Decrement=()=>{
//         setState({count:state.count-1})
//     }
//     let Reset =()=>{
//         setState({count:0})
//     }
//   return (
//     <div>
//         <h1>{state.count}</h1>
//         <button onClick={Increment}>Increment</button>
//         <button onClick={Decrement}>Decrement</button>
//         <button onClick={Reset}>Reset</button>
//     </div>
//   )
// }

// export default App

//! Cart and setCart
import React, { useState } from 'react'

const App = () => {
    let [cart,setCart] = useState(0)
    let addToCart = ()=>{
        // setCart(cart+1)
        // setCart(cart+1) //! If we go like this then it will take the last statement
        setCart(preVal=>preVal+1)
        setCart(preVal=>preVal+1)
    }
  return (
    <div>
        <h1>{cart}</h1>
        <button onClick={addToCart}>Add to cart</button>
    </div>
  )
}

export default App