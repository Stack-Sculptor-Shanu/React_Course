import React from 'react'
import withFormHandling from '../FormHandlilngWithHOC'

const Register = ({values,handleChange,handleSubmit}) => {
  return (
    <div>
        <h1>Register Yourself</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" id="email" value={values.email} placeholder='Enter email' onChange={handleChange} />
            <input type="password" name="password" id="password" value={values.password} placeholder='Enter password' onChange={handleChange} />

            <button>Submit</button>
        </form>
    </div>
  )
}

export default withFormHandling(Register)