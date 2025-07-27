import React, { Component } from "react";
class Menu extends Component {
    render(){
        return (
            <div className="menublock">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                    
                </ul>
            </div>
        )
    }
}
export default Menu