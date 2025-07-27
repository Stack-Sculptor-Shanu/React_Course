import { createContext } from "react";
export const AirtelContextApi = createContext("")
let {Provider} = AirtelContextApi;

const AirtelProvider = ({children}) => {
    return <Provider value={{network:"JIO",sim_type:"nano",price:359, data:4,duration:28,nearest_tower:'bengaluru'}}>
        {children}
    </Provider>
}
export default AirtelProvider