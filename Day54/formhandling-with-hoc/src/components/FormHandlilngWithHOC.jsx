import React from "react";

const withFormHandling = (WrappedComp) => {
    return class extends React.Component{
        constructor() {
            super();
            this.state = {
                values: {

                }
            }
        }

        handleChange = e => {
            const {name,value} = e.target;
            this.setState(preVal => ({
                ...preVal,
                values: {...preVal.values, [name]:value}
            }))
        }

        handleSubmit = e => {
            e.preventDefault();
            console.log(this.state)
        }
        render() {
            return <WrappedComp values = {this.state.values} handleChange = {this.handleChange} handleSubmit = {this.handleSubmit}/>
        }
    }
}
export default withFormHandling