//Short circuitong AND operator &&
//* If you wanna print something or nothing
// import React, { useState } from 'react'

// let data = ['react','js']
// const App = () => {
//     let [messages,setMessages] = useState(data)
//   return (
//     <div>
//         <div>Notifications {messages.length>0 && <sup>{messages.length}</sup> }</div>
//     </div>
//   )
// }

// export default App

//! What is Conditoional Rendering in React
//* In react you can create distinct components that encapsulate behavior you need. then you can render only some of them, depending on the state of your application.

//* Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript Operators like if or the conditional operator to create elements representing the current state, and let react update the UI to match them 


//! Fetching
import React, { Fragment, useState } from 'react'


const App = () => {
    let [data,setData] = useState(null);
    // let [data,setData] = useState('')
    // const 
    (async function(){
        let res = await fetch('https://api.github.com/users');
        let finalVal = await res.json();
        setData(finalVal)
        console.log(finalVal)
    })()
  return (
    <div>
        {
            data===null? 'loading....'
            : data.map(user=>{
                return <Fragment key={user.id}>
                    <li>{user.login}</li>
                </Fragment>
            })
        }
    </div>
  )
}

export default App