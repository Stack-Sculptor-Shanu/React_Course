import React from 'react'
import withFormHandling from '../withFormHandling'

const Login = ({handleChange,handleSubmit,values,errors}) => {
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Email' value={values.email} name='email' onChange={handleChange} />
            <input type="text" placeholder='Password' value={values.password} name="password" onChange={handleChange} />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default withFormHandling(Login)