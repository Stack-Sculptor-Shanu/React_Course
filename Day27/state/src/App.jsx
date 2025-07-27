import { Component } from 'react'

export default class App extends Component {
    state = {
        username:"Shanu"
    }
    //! HOw to mutate state property

    //! Lifecycle method
    // constructor(){ // constructor is a special method to use binding this keyword as well as initializing state object and add event handlers to the DOM it renders only once
        // constructor is mounting only once to the DOM
    //     super();
    //     console.log(this)
    //     //! Initialization of state
    //     this.state = {
    //         username:"Shanu"
    //     }
    // }
    // Render method is rerendering
  render() {
    // let app = {
    //     state:{
    //         username: "Sailaja"
    //     }
    // }
    return (
      <div>My name is {this.state.username}
      {/* Do not update state directly */}
        {/* <button onClick={()=>(this.state.username= 'Rahul')}>Update name</button>  */}
        <button onClick={()=>this.setState({username:"Rahul"})}>UPdate Name</button>
        {/* setState is asynchronous */}
      </div>
    )
  }
}
