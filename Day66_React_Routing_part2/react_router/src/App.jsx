import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Users from './components/Profiles/Users'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    // It is a container for all components
    <BrowserRouter>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/users">Users</Link></li>
    </ul>
        <Routes>
            {/* New component introduced in react router DOM v6 onwards and it replaces the switch component */}
            {/* Renders a branch of <Routes> that best matches the current location. Note that these routes do not participate in data loading, actions, code splitting, or any other route module features. */}
            <Route path='/' element={<Home/>}/>
            {/* Route it is child component which renders a specific UI componentwhen URL matches the specified path using path attribute. */}
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/users' element={<Users/>}/>

            {/* Page not found and it always should be at the bottom of the route */}
            <Route path='*' element = {<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App