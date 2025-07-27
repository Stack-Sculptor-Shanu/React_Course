import React from "react"

const withFormHandling = (WrappedComp) => {
    return class extends React.Component{
        constructor() {
            super();
            this.state = {
                values:{},
                errors:{}
            };
        }

        handleChange = (e) => {
            console.log(e)
            const {name,value} = e.target;
            this.setState((prevState) => (
                {
                    // values:prevState.values,
                    // [name] : value
                    values:{
                        ...prevState.values,
                        [name] :value
                    }
                }
            ))
        }

        handleSubmit = (e) => {
            e.preventDefault();
            // const errors = this.validateErrors();
            // this.setState({errors})
            // if(Object.keys(errors).length===0){
            //     this.props.onSubmit(this.state.values)
            // }
            console.log(this.state)
        }

        validateErrors(){
            return {}
        }
        render() {
            return <WrappedComp {...this.props} values = {this.state.values} errors={this.state.errors} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        }
    }
}
export default withFormHandling