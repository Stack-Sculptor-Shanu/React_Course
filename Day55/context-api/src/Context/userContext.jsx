import { createContext } from "react";

const UserContext = createContext("");
let {Provider} = UserContext

//Provider
const UserProvider = (props) => {
    return <Provider value={{name:"Shanu",company:"Pasmina",salary:100000,gender:"male"}}>
        {props.children}
    </Provider>
}
export default UserProvider