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
    console.log("THis is the best place for initialize the state object and bind this keyword");
    this.state = {
      name:'Shanu',
      count:0,
      course:"java",
      users:""
    }
  }
  // static getDerivedStateFromProps(props,state){
  //   console.log("I am getDerivedState from state after constructor and before render method and render again & again based on state and props")
  //   console.log("This method is rare case used method")
  //   return null
  //   // return {course:"Js"}
  // }
  // componentDidMount(){
  //   console.log("I am component did mount I will render only once and execute after all mounting lifecycle");
  //   console.log("this is the best place for calling network call or AJAX calls and interact with DOM and any other ");
  //   // this.setState({course:this.state.course+1})
  //   window.fetch("https://api.github.com/users").then(x=>{
  //     x.json().then(y=> this.setState({users:y,course:"Python"}))
  //   })
  // }
  // handleClick=()=>{
  //   console.log("Click event is triggered");
  //   this.setState({count:this.state.count+1})
  // }
  //update phase
  //1: getDerivedStateFromProps()
  //2: shouldComponentUpdate()
  //3: getSnapShotBeforeUpdate() tthis method just called before components UI is updated it allows the component to capture some information about current state of the UI such as scroll position before it changes and it returns the value is passed as a third argument or parrameter to the componentDidUpdate method
  //4: componentDidUpdate()
  //5: Render()
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log("I am shouldComponentDidUpdate");
  //   let x = this.state.count !== nextState.count
  //   console.log(x)
  //   return x
  // }

  // getSnapshotBeforeUpdate(preprops, preState){
  //   // console.log("I am getSnapShotBeforeUpdate")
  //   let test = document.getElementById('demo').innerHTML = `
  //   Before the update ${preState.course}`
  //   return test
  // }
  // componentDidUpdate(){
  //   let test = document.getElementById('demo1').innerHTML = `
  //   updated value ${this.state.course}`
  //   console.log(test)
  //   return test
  // }

  //! Unmounting phase it is called just before a component is umounted it allows us to perform necessary of cleaning up the task such as removing event listener and avoid memory leaks
  componentWillUnmount(){
    window.addEventListener('scroll',e=>{
      console.log(e.target)
    })
  }
  render() {
        console.log("I am render method and execute or render again & again")
        console.log("THis is the best place for rendering JSX and compose the child COmponent")
    return (
      <div>
        <button onClick={this.handleClick}>Click for changes <strong>{this.state.count}</strong></button>
        <h1>{this.state.course}</h1>
        <aside id='demo'></aside>
        <aside id='demo1'></aside>
      </div>
    )
  }
}
