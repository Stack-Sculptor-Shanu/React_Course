import React from 'react'

const Menu = () => {
  return (
    <div className='side-menu'>
        <div className="logo">
            TestYantra
        </div>
        <div className="menu">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/users">Users</a>
                </li>
                <li>
                    <a href="/profile">Profile</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Menu