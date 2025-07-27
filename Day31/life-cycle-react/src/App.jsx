import React, { Component } from 'react'

export default class App extends Component {
  //mounting phase methods
  //1: Constructor()
  //2: getDerivedStateFromProps()
  //3: render()
  //4: componentDidMount()
  constructor(){
    super()
    console.log("I am Constructor and execute or render only once")
    console.log("THis is the best place for initialize the state object and bind this keyword")
  }
  static getDeriviedStateFromProps(props,state){
    console.log("I am getDerivedState from state after constructor and before render method and render again & again based on state and props")
    console.log("This method is rare case used method")

  }
  componentDidMount(){
    console.log("I am component did mount I will render only once and execute after all mounting lifecycle");
    console.log("this is the best place for calling network call or AJAX calls and interact with DOM and any other ")
  }
  render() {
        console.log("I am render method and execute or render again & again")
        console.log("THis is the best place for rendering JSX and compose the child COmponent")
    return (
      <div>App</div>
    )
  }
}
