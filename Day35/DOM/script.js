//Custom event
const qsp = new Event("qspEvent");
// console.log(e)

// const body = document.body
// body.onload = function(e){
//     console.log(e)
// }

let btn = document.querySelector("#btn")
console.log(btn)
//listening event
btn.addEventListener("qspEvent",e=>{
    console.log(e)
    // console.log(e.target)
    e.target.style.background = "yellow"
});
//dispatch the event
btn.dispatchEvent(qsp)