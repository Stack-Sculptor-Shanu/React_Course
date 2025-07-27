import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            count:0
        };
        // console.log(this+"this keyword is coming from constructor. it is the right place to bind this keword")
        // console.log(this)
        this.Increment = this.Increment.bind(this)
    }
    Increment(){
        console.log(this) //window
        this.setState({count:this.state.count+1}) //undefined
    }
  render() {
    // console.log(this+'this keyword is coming from rende3r method')
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.Increment}>Count Increased By One</button>
        <button onClick={this.Increment.bind(this)}>Incre</button>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>Count</button>
      </div>
    )
  }
}
