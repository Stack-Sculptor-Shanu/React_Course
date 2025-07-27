import React, { useContext, useState } from 'react'
import { TaskContext } from '../../context/taskContext'

const TaskForm = () => {
    // let [title,setTitle] = useState("")
    // let [author,setAuthor] = useState("")
    // let [description,setDescription] = useState("")
    let {addTask, task} = useContext(TaskContext)
    let [state,setState] = useState({
        title:"",
        author:"",
        description:"",
        status:false
    })

    let {title,author,description,status} = state

    let handleChange = e => {
        let {name,value} = e.target;
        setState({...state, [name]:value})
    }

    let handleSubmit = e => {
        e.preventDefault();
        try {
            console.log(state)
            addTask(title,author,description)

            setState({
                title:"",
                author:"",
                description:"",
                status:false
            })
        } catch (error) {
            console.log(error)
        }
    }
    console.log(task)
  return (
    <section id='form'>
        <article>
            <h2>Add Task to the Basket</h2>
            <main>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" placeholder='Add title' name="title" value={title} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input type="text" placeholder='Add author' name="author" value={author} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">description</label>
                        <textarea id='description' name="description" value={description} onChange={handleChange} cols={30} rows={8}></textarea>
                    </div>

                    <div className="form-group">
                        <button>{status === true? 'loading':"add task"}</button>
                    </div>
                </form>
            </main>
        </article>
    </section>
  )
}

export default TaskForm