import { createContext, useState } from 'react'
import {v1 as uuid} from 'uuid'

export const TaskContext = createContext();

const TaskProvider = ({children}) => {
    let [task,setTask] = useState([])
    const addTask = (title,author,description)=> {
        setTask([...task, {title,description,author,id:uuid()}])
    }
    return <TaskContext.Provider value={{addTask, task}}>
        {children}
    </TaskContext.Provider>
}
export default TaskProvider