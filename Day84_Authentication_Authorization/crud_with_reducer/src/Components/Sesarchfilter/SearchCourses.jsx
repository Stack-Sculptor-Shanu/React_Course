import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchCourses = ({handleSearch}) => {
  return (
    <div className='searchBlock'>
        <span>
            <input type="text" placeholder='search courses' onInput={(e) => handleSearch(e.target.value)} />
        </span>
        <span className='searchIcon'><IoSearch /></span>
    </div>
  )
}

export default SearchCourses