import React from "react";
import { createRoot } from "react-dom/client";
//! Let's say a scenario where you'll be getting unreachable code that's why you need to wrap up the entire code
// const List = ()=>{
//     return 
//     <ul> //! Here it is unreachable but whenever we will align it to return then it will work or after return keyword give a parenteses it will work
//         <li>Shanu</li>
//         <li>Shashi</li>
//         <li>babygirl</li>
//     </ul>
// }

//* Here we have parent wrapper as div and it creates an extra node in the DOM and I don't want that
// const Block = (
//     <div>
//         <h1>I am H1</h1>
//         <h2>I am H1</h2>
//         <h3>I am H1</h3>
//     </div>
// )

//* Here we have a parent b ut it does not create an extra node that we say it as fragment
const Block = (
    <>
        <h1>I am H1</h1>
        <h2>I am H1</h2>
        <h3>I am H1</h3>
    </>
)
createRoot(document.querySelector('#root')).render(
    Block
    // <List />
    // <ul>
    //     <li>Shanu</li>
    //     <li>Shashi</li>
    //     <li>babygirl</li>
    // </ul>
)