import React, { useState } from 'react'
import './index.css'
import Form from './components/Forms/Form'
import TodoList from './components/todo/TodoList'
import {v1 as uuid} from 'uuid'
import toast,{Toaster} from 'react-hot-toast'

const App = () => {
    let [state,setState] = useState({
        items: [],
        id: uuid(),
        course: "",
        trainer: ''
    })

    let handleChange = e =>{
        let {name, value} = e.target
        setState({...state, [name] : value})
    }

    let handleSubmit = e =>{
        e.preventDefault();
        try {
            let newItem = {
                id:state.id,
                course:state.course,
                trainer:state.trainer
            }

            let updatedItem = [...state.items, newItem]
            setState({
                items:updatedItem,
                id:uuid(),
                item:""
            })
            console.log(state)
        } catch (error) {
            console.log(error)
        }finally{
            // setState({
            //     course:"",
            //     trainer:""
            // })
        }
    }

    let handleDelete = (id)=> {
        let filteredData = state.items.filter(item=> item.id !== id);
        setState({...state,items:[...filteredData]})
    }

    let handleUpdate = (id) => {
        let editContent = state.items.filter(item=> item.id !== id);
        let selectedItem = state.items.find((item)=> item.id === id)
        console.log(selectedItem)
        setState({
            items:editContent,
            course: selectedItem.course,
            trainer: selectedItem.trainer,
            id:id
        })
    }
  return (
    <div>
        <section id="mainBlock">
            <article>
                <header>
                    <Toaster/>
                    <h1>Todo App</h1>
                </header>

                <main>
                    <Form course= {state.course} trainer = {state.trainer} handleChange = {handleChange} handleSubmit = {handleSubmit}/>
                    <TodoList items = {state.items} handleDelete = {handleDelete} handleUpdate = {handleUpdate}/>
                </main>
            </article>
        </section>
    </div>
  )
}

export default App