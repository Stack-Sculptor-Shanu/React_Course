import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import moment from 'moment'
import axios from 'axios'
// console.log(moment)

const CourseDetails = () => {
  let navigate = useNavigate()
  let {state: {id,trainer,title, description, createdAt}} = useLocation()

  let deleteCourse = async (id) => {
    await axios.delete(`http://localhost:5000/courses/${id}`);
    navigate('/')
  }
  return (
    <div className='course_details'>
      <header>
        <Link to={`/edit/${id}`} className='btn-help btn-edit'>Edit</Link>
        <Link to='/'className='btn-help btn-delete' onClick={()=>deleteCourse(id)}>Delete</Link>
        <Link to='/'className='btn-help'>Go back</Link>
        <h2>{title}</h2>
      </header>
      <main>
        <p>
          <span>Trainer: </span>
          <span>{trainer}</span>
        </p>
        <p>{description}</p>
      </main>
      <footer>
        <span>Course Created at <strong>{moment(createdAt).format("MMM Do YY")}</strong></span>
        
      </footer>
    </div>
  )
}

export default CourseDetails