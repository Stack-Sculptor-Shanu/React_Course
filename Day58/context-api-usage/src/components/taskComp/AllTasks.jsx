import React, { useContext } from 'react'
import { TaskContext } from '../../context/taskContext'
import Tasks from './Tasks'

const AllTasks = () => {
    let {task} = useContext(TaskContext)
  return (
    <section id='task'>
        <article>
            <h2>All task</h2>
            <div className="list">
                {
                    task===null? 'loading': task.length>0 && task.map(t=> {
                        return <Tasks key={t.id} {...t}/>
                    })
                }
            </div>
        </article>
    </section>
  )
}

export default AllTasks