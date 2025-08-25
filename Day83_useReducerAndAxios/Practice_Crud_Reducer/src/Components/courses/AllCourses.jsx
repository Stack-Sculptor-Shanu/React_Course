import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Spinner from '../../Pages/spinner/Spinner'
import Course from '../../Pages/Course'
import courseServices from '../../services/CourseService'
import SearchCourses from '../Sesarchfilter/SearchCourses'
import { UserContextApi } from '../../context/UserContext'

const AllCourses = () => {
    let {users,fetchUsers} = useContext(UserContextApi)
    
    let [state, setstate] = useState(null)
    let [searchterm, setsearchterm] = useState("")

    let fetchData = async ()=>{
        let data = await courseServices.fetchService()
        // console.log(data)
        setstate(data)
    }

    let handleSearch = (term) => {
        setsearchterm(term)
    }

    useEffect(()=>{
        fetchData()
        fetchUsers()
    },[])

    let filteredCourse = state?.filter(val=>{
        if(searchterm === ""){
            return val;
        }else if(val.title.toLowerCase().includes(searchterm.toLowerCase())){
            return val;
        }
    }).map(course=>{
                    return <Course key={course.id} {...course}/>})
  return (
    <div>
        <SearchCourses handleSearch = {handleSearch}/>
        <h2>All Courses</h2>
        <div className="courses">
            {
                state===null? <Spinner/>:filteredCourse
            }
        </div>
    </div>
  )
}

export default AllCourses