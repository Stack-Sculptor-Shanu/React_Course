// import React from 'react'
// import './index.css'

// const App = () => {
//   return (
//     <section className='grandparent'
//     onClick={(e)=>{
//         console.log("I am grandparent")
//         e.stopPropagation()
//     }}>
//         GrandParent
//         <div className="parent"
//         onClick={(e)=>{
//             console.log("I am parent");
//             e.stopPropagation()
//         }}>
//             Parent
//             <button className="child"
//             onClick={(e)=>{
//                 console.log("I am child")
//                 e.stopPropagation()
//             }}>
//                 Child
//             </button>
//         </div>
//     </section>
//   )
// }

// export default App

//! likewise capturing phase
import React from 'react'
import './index.css'

const App = () => {
  return (
    <section className='grandparent'
    onClickCapture={(e)=>{
        console.log("I am grandparent")
        e.stopPropagation()
    }}>
        GrandParent
        <div className="parent"
        onClickCapture={(e)=>{
            console.log("I am parent");
            e.stopPropagation()
        }}>
            Parent
            <button className="child"
            onClickCapture={(e)=>{
                console.log("I am child")
                e.stopPropagation()
            }}>
                Child
            </button>
        </div>
    </section>
  )
}

export default App


// import React from 'react'

// const App = () => {
//   return (
//     <div>
//         <form onSubmit={(e)=>{
//             e.preventDefault()
//             console.log("hello Form")
//         }}>
//             <input type="text" />
//             <button>Submit</button>
//         </form>
//     </div>
//   )
// }

// export default App


// import React from 'react'

// const App = () => {
//     // let handleKeyboardEvent=()=>{
//     //     console.log("you have pressed any key")
//     // }

//     // let handleKeyboardEvent=(e)=>{
//     //     if(e.key==="Enter"){
//     //         console.log(`You have pressed ${e.key}`)
//     //     }
//     // }
//     let handleKeyboardEvent=(e)=>{
//         // if(e.keyCode===13){
//         //     console.log(`You have pressed ${e.keyCode}`)
//         // }
//         if(e.key === 'y'){
//             console.log('You have pressed y')
//         }else if(e.key === 'n'){
//             console.log('You have pressed n')
//         }else{
//             console.log('some other key')
//         }
//     }
//   return (
//     <div>
//         <input type="text" placeholder='Type any key' onKeyPress={handleKeyboardEvent} />
//     </div>
//   )
// }

// export default App