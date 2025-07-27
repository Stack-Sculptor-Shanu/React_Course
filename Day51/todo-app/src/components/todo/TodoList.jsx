import React, { Fragment } from 'react'

const TodoList = ({items, handleDelete, handleUpdate}) => {
    console.log(items)
  return (
    <div className='todo'>
        <h2>Courses</h2>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Course</th>
                    <th>Trainer</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                {
                    items.length>0 && items.map(({id,course,trainer}) => {
                        return <Fragment key={id}>
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{course}</td>
                                <td>{trainer}</td>
                                <td>
                                    <button className='update' onClick={e=>{handleUpdate(id)}}>📝</button>
                                    <button className='delete' onClick={e=>{handleDelete(id)}}>🗑️</button>
                                    {/* <button className='delete' onClick={e=>handleDelete(id)}>🗑️</button> */}
                                </td>
                            </tr>
                        </Fragment>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default TodoList