import React from "react";
import { createRoot } from "react-dom/client";
const div = document.createElement('p');
div.innerText = "Hii I am Shanu";
console.log(div)
console.log(typeof div) //!it wil return an object and we can't print an object on our UI

//? Create element using react
//* Syntax
//! const element = React.createElement("element", Property/Attribute,text/content/children)
const para = React.createElement("p",{className:"para"},"I am para from react native element") //Explicitly converting element to react element

createRoot(document.querySelector('#root')).render(
    para
    // <h1>Successfully react app created with Vite CLI</h1>
)

// createRoot(document.querySelector('#root')).render(div) //!Uncaught Error: Objects are not valid as a React child (found: [object HTMLParagraphElement]).