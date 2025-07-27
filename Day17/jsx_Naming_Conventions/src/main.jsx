import React from "react";
import { createRoot } from "react-dom/client";
let arr = ['shanu','shashi','manu'];
let isAvailable = true;
let isNullValue = null;
let isUndefined = undefined;
createRoot(document.querySelector('#root')).render(
    <>
    {/* {for(let i = 0; i<arr.length; i++){
        return arr[i];❌❌❌
    }} */} 
    {/* ✅✅✅✅ */}
    {arr.map(e=>console.log(e))}
    
    {isAvailable===true?'Yes I am truthy value':""}
    {isNullValue===null?'Yes I am null value':""}
    {isUndefined===undefined?'Yes I am undefined value':""}
    </>
);