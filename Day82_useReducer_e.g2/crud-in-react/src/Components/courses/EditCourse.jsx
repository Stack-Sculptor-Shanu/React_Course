import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditCourse = () => {
    let [state,setstate] = useState({
        title:"",
        trainer:"",
        description:"",
        updatedAt:"",
        isloading:false
    });
    let navigate = useNavigate()

    let {id} = useParams()

    let {title,trainer,isloading, description, updatedAt}= state;
    
    let fetchCourse = async ()=>{
        let {data} = await axios.get(`http://localhost:5000/courses/${id}`)
        console.log(data)
        setstate(data)
    }

    useEffect(()=>{
        fetchCourse();
    },[])

    let handleChange = e => {
        let {name,value} = e.target;
        setstate({...state, [name]:value})
    }

    let handlesubmit = async (e)=>{
        e.preventDefault();
        try {
            let payload = {title,trainer, description, updatedAt}
            console.log(payload)
            await axios.put(`http://localhost:5000/courses/${id}`, payload)
            // let data = await window.fetch('http://localhost:5000/courses',{
            //     method:'POST',
            //     body:JSON.stringify(payload)
            // })
            console.log(updatedAt)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <section className='content'>
    <main className='authBlock'>
        <h1>Edit Course</h1>
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
                <label htmlFor="updatedAt">Course Updated At</label>
                <input type="date" name="updatedAt" id="updatedAt" value={updatedAt} onChange={handleChange} required placeholder='Enter date' />
            </div>
            <div className="form-group">
                <button>{isloading?'loading':'Update Course'}</button>
            </div>
        </form>
    </main>
    </section>
  )
}

export default EditCourse