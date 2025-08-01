import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import courseServices from '../../services/CourseService';
import toast from 'react-hot-toast';

const CreateCourse = () => {
    let [state,setstate] = useState({
        title:"",
        trainer:"",
        description:"",
        createdAt:"",
        isloading:false
    });
    let navigate = useNavigate()
    let {title,trainer,isloading, description, createdAt}= state;

    let handleChange = e => {
        let {name,value} = e.target;
        setstate({...state, [name]:value})
    }

    let handlesubmit = async (e)=>{
        e.preventDefault();
        try {
            let payload = {title,trainer, description, createdAt}
            console.log(payload)
            // let {data} = await axios.post('http://localhost:5000/courses',payload)
            courseServices.createService(payload) //using axios instance
            toast.success("Successfully created a course")
            // let data = await window.fetch('http://localhost:5000/courses',{
            //     method:'POST',
            //     body:JSON.stringify(payload)
            // })
            // console.log(data)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <section className='content'>
    <main className='authBlock'>
        <h1>Create Course</h1>
        <form onSubmit={handlesubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" name='title' value={title} onChange={handleChange} required placeholder='Enter title' />
            </div>
            <div className="form-group">
                <label htmlFor="trainer">Trainer</label>
                <input type="text" name='trainer' value={trainer} onChange={handleChange} required placeholder='Enter trainer' />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea name='description' id='description' cols={30} rows={3} value={description}onChange={handleChange}></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="createdAt">Course Created At</label>
                <input type="date" name="createdAt" id="createdAt" value={createdAt} onChange={handleChange} required placeholder='Enter date' />
            </div>
            <div className="form-group">
                <button>{isloading?'loading':'Create Course'}</button>
            </div>
        </form>
    </main>
    </section>
  )
}

export default CreateCourse