// import React from "react";
// //exrends keyword is inheriting the property of react
// class App extends React.Component{
//     //required method
//     render(){
//         console.log(this)
//         return <><h1>Hii I am class based component</h1></>
//     }
// }
// export default App

// import React from "react";
// class App extends React.Component{
//     // you can't declare a variable because a class has properties and methods you can go like this
//     // you can declare a variable inside a method
//     //! let x = 'abba nahi maane' ❌❌
//     x = "Shanu";
//     y(){
//         let x = "shanu";
//         console.log(x)
//     }
//     render(){
//         return <>
//             <h1>I am class based component</h1>
//         </>
//     }
// }
// export default App

// const Fun = ()=>{
//     return (
//         <div>
//             <h1>I am Functional based component</h1>
//         </div>
//     )
// }
// export default Fun

import React,{Component} from "react";
class App extends Component{
    state
    render(){
        return(
            <>
                <h1>I am class based component</h1>
            </>
        )
    }
}
export default App