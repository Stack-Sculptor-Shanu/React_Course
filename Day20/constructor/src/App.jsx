import React, { Component } from "react";
class App extends Component{
    constructor(){
        super()
        console.log(this)
        //Constructor is the best place for initialize the state object and binding this keyword adding event handler  and many more
        //! It renders only once into the DOM
        this.state = { // state can accept only two datatypes either null or object
            username: "Thor",
            company: "testyantra",
            salary: 1000000,
            city: "bangalore"
        }
    }
    render(){
        return (
            <>
                <h1>Hii I am class based component</h1>
                <h1>My name is {this.state.username}</h1>
                <h1>I work for {this.state.company}</h1>
                <button onClick={()=>this.setState({username:"Amarjeet"})}>Update Name</button>
            </>
        )
    }
}
export default App