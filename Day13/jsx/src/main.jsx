import React from "react";
import { createRoot } from "react-dom/client";
// createRoot(document.querySelector('#root')).render(React.createElement('h1',null,'I am react without jsx'))

//! Or you can go via declaring the variable
const data = React.createElement('h1',null,"Hii I am Shanu without JSX") //native react..
//! React element object consists of properties
//$$typeof
// props
// key
// ref
// type

console.log(data)
const elementWithJSX = <h1>Hii I am with JSX</h1> //Wrapper of JS and HTML and both are returning object 
createRoot(document.getElementById('root')).render(elementWithJSX)