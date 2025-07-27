// const HOC = (WrappedComp) => {
//   return function () {
//     return <WrappedComp/>
//   }
// }

import React, { useState } from "react"

// ! or

// const HOC = WrappedComp => {
    
    
//     let comp = function () {
//         let [profile,setProfile] = useState({
//         name:"Shanu",
//         company:"PSS",
//         age:21,
//         salary:100000,
//         gender:"male",
//         city:"Patna",
//         hobbies: ["Watching movies","playing Cricket"]
//     });
//         return <WrappedComp profile = {profile} />
//     }
//     return comp
// }

// export default HOC

// HOC(); /HOC is a function taht takes a component as an argument and return enhanced version of the component

// let MyComp = () => {
//     return <h1>Hello</h1>
// }

// HOC(MyComp)



//! Another example
const withFetch = (WrappedComp) => {
    return class extends React.Component{
        constructor() {
            super()
            this.state = {
                data: null,
                loading: true,
                error: null
            }
        }

        async componentDidMount() {
            try {
                let res = await window.fetch("https://api.github.com/users");
                let finalData = await res.json();
                this.setState({data:finalData, loading:false})
            } catch (error) {
                this.setState({error:error, loading:false})
            }
        }
        render() {
            return(
                <>
                    <WrappedComp {...this.state} />
                </>
            )
        }
    }
}
export default withFetch