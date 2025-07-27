// let person1 = {
//     name:"Shanu",
//     salary : 100000
// }

// let person2 = {
//     name:"Lavan",
//     salary : 200000
// }
// let courses = {
//     courseName: "MERN Stack",
//     trainer: "Shanu"
// }
// let win = window;

// function callAnyObj(val){
//     return val+this;
// }
// // console.log(callAnyObj("Shanu"))

// let result = callAnyObj.call("Shanu",person1)
// console.log(result)

// let courses = {
//     course_Name: "mernstack",
//     trainer: "Shanu",
//     duration: 50
// }

// let person = {
//     name:"Shanu",
//     skills: ["JS","ReactJS"],
//     available:true
// }
// let batch = {
//     timings: "6pm",
//     students:100,
//     course:"JS"
// }

// let win = window
// let doc = window.document

// function callAnyObjWheneverNeeded(){
//     return this // window obj is default pointer and change default pointer into new object reference pointer
// }

// console.log(callAnyObjWheneverNeeded())

// let callCourseRef = callAnyObjWheneverNeeded.call(batch)

// console.log(callCourseRef)


// let product = {
//     num:100
// }
// let courses = {
//     num:100
// }
// let addNumbers = function(a,b,c){
//     return this.num+a+b+c
// }

// let addData = addNumbers.call(product,10,20,40)
// console.log(addData)

// let addData = addNumbers.apply(product,[10,20,40])
// let bound = addNumbers.bind(product, 10,30,40)  // new bound function created by bind method
// console.log(addData)
// console.log(bound())



let person = {
    firsrtName : "Ujjwal",
    lastName : "Kumar",
    details: function(){
        console.log(`${this.firsrtName} ${this.lastName}`)
    }
}
let result = person.details()
// console.log(result())
// result()