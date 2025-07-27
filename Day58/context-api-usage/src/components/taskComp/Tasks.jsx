import React from 'react'

const Tasks = ({title,author,description}) => {
  return (
    <div className='container'>
        <h2>{title}</h2>
        <p>
            author:{author}
        </p>
        <p>{description}</p>
    </div>
  )
}

export default Tasks