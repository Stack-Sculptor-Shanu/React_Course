// import { Fragment } from 'react'
// import { CounterContextApi } from '../context/CounterContext'

// const Counter = () => {
//   return (
//     <div>
//         <CounterContextApi.Consumer>
//           {
//             (val)=>{
//               return <Fragment>
//                 <h1>{val.count}</h1>
//                 <button onClick={val.increment}>Increment</button>
//                 <button onClick={val.decrement}>Decrement</button>
//                 <button onClick={val.reset}>Reset</button>
//               </Fragment>
//             }
//           }
//         </CounterContextApi.Consumer>
//     </div>
//   )
// }

// export default Counter


//! Class based Component
// import React, { Component } from 'react'
// import { CounterContextApi } from '../context/CounterContext'

// export default class Counter extends Component {
//   render() {
//     return (
//       <div>
//         <CounterContextApi.Consumer>
//           {val=>{
//             return<>
//               <h1>{val.count}</h1>
//               <button onClick={val.increment}>Increment</button>
//               <button onClick={val.decrement}>Decrement</button>
//               <button onClick={val.reset}>Reset</button>
//             </>
//           }}
//         </CounterContextApi.Consumer>
//       </div>
//     )
//   }
// }


//!Functional Based Component
// import { useContext } from 'react'
// import { CounterContextApi } from '../context/CounterContext'

// const Counter = () => {
//   let {count, increment,decrement,reset} = useContext(CounterContextApi)
  
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default Counter

//! Another method in class based
import React, { Component } from 'react'
import { CounterContextApi } from '../context/CounterContext'

export default class Counter extends Component {
  // componentDidMount(){
  //   let value = this.context
  //   console.log(value)
  // }
  static contextType = CounterContextApi
  render() {
    let value = this.context
    return (
      <div>
        <h1>{value.count}</h1>
        <button onClick={value.increment}>increment</button>
        <button onClick={value.decrement}>decrement</button>
        <button onClick={value.reset}>reset</button>
      </div>
    )
  }
}
// Counter.contextType = CounterContextApi;
// CounterContextApi.displayName = "My counter App with shanu"