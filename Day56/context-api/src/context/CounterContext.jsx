import { createContext, useState } from "react";

export const CounterContextApi = createContext(0)

//Create provider and add children

const counterProvider = ({children}) => {
    //Setting global varaible
    const [count,setCount] = useState(0);
    const increment =() => {
        setCount((preval)=>preval+1)
    }
    const decrement =() => {
        setCount((preval)=>preval-1)
    }
    const reset =() => {
        setCount(0)
    }
    return <CounterContextApi.Provider value={{count, increment,decrement,reset}}>
            {children}
        </CounterContextApi.Provider>
}

export default counterProvider;