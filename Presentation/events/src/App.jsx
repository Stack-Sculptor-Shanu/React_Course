import React from 'react'

const App = () => {
    const handleSubmit = (e)=>{
        console.log(e)
        e.preventDefault()
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default App