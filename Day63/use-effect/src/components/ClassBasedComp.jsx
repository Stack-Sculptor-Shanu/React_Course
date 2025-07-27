import React, { Component } from 'react'

export default class ClassBasedComp extends Component {
    constructor(){
        super();
        this.state = {
            count:0
        }
    }
    componentDidMount(){
        // this is the best place for using side effect in class based component
        document.title = `This is coming from class ${this.state.count}`
        console.log('cdm triggered')
    }
    componentDidUpdate(){
        document.title = `This is coming from class ${this.state.count}`
        console.log('it is updated')
        // it renders the component based on states and props.
    }
    componentWillUnmount(){
        
    }
  render() {
    //it is not the best place for calling side effect
    // document.title = `this is from render ${this.state.count}`
    return (
      <div>
        <h1>{this.state.count} from Class based</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
      </div>
    )
  }
}
