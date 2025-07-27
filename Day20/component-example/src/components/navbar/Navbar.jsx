import React, { Component } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
class Navbar extends Component {
    render(){
        return (
            <div className="navbar_container">
                <Logo/>
                <Menu/>
            </div>
        )
    }
}
export default Navbar