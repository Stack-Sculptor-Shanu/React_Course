import React, { Component } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";

export default class Search extends Component {
  render() {
    return (
      <div className='searchblock'>
        <aside className="searchdivider">
            {/* Left search */}
            <div className="left_search">
                <span className='icon_left'>
                    <IoLocationOutline />
                </span>
                <span className='input_content'>
                    <input type="text" placeholder='bangalore' />
                </span>
                <span className="icon_right">
                    <RiArrowDropDownLine />
                </span>
            </div>

            {/* Right Search */}
            <div className="right_search">
                <span className="icon_left">
                    <CiSearch />
                </span>
                <span className='input_content'>
                    <input type="text" placeholder='search for cleaning..' />
                </span>
            </div>
        </aside>
      </div>
    )
  }
}
