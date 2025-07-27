// import React, { Component } from 'react'

// export default class App extends Component {
//     constructor(){
//         super();
//         this.divRef = React.createRef(null);
//         this.h1Ref = React.createRef(null)
//     }

    //! ref
    // componentDidMount(){
    //     // console.log(this.divRef);
    //     // console.log(this.h1Ref)
    //     this.h1Ref.current.style.background = 'red'
    //     this.h1Ref.current.style.color = 'white'
    //     this.h1Ref.current.style.padding = '10px'
    // }

    //!DOM
    // componentDidMount(){
    //     let para = document.getElementById('para');
    //     para.style.background = 'purple'
    //     para.style.color = 'white'
    //     para.style.padding = '10px'
    // }

//   render() {
//     return (
//       <div ref={this.divRef}>
//         <h1 ref={this.h1Ref}>Hello</h1>
//         <p id='para'>Hello para</p>
//       </div>
//     )
//   }
// }



import React, { Component, createRef } from 'react'

export default class App extends Component {
    state = {
        val:"",
    }

    inputRef = createRef() 

    changeInputColor = ()=>{
        this.setState({val:"Shanu"})
        this.inputRef.current.style.background = 'purple'
        this.inputRef.current.style.width = '500px'
        this.inputRef.current.style.color = 'white'
        this.inputRef.current.prepend = 'added some helping text'
    }
  render() {
    return (
      <div>
        <input type="text" placeholder='change my color' ref={this.inputRef} value={this.state.val} />
        <button onClick={this.changeInputColor}>Change Input Color</button>
      </div>
    )
  }
}
