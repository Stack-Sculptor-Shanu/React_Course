import React, { Component } from "react";
import Parent from "./components/Parent";
import ParentFBC from "./FBC/ParentFBC";
class App extends Component{
    render(){
        return(
            <div>
                <Parent/>
                {/* <ParentFBC/> */}
            </div>
        )
    }
}
export default App