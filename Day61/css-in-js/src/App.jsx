import React from 'react'
import CSS_in_JS from './components/CSS_in_JS'
import styled from 'styled-components'
console.log(styled)

// Declaring a styled component
const H1 = styled.h1`
color:yellow;
font-size:30px
`
const Form = styled.form`
height:500px;
width:500px;
background:#eee;
display:flex;
flex-direction: column;
padding:20px;
gap:10px
`
const Button = styled.button`
background:red;
color:white;
font-size:15px;
border:1px solid red;
padding:10px
`

//limitations of inline styles with JS can not add keyframe pseudo selectors media queries 
// let styles = {
//     background:"red",
//     color:"#673ab7",
//     fontSize: 40,
//     margin: 10
// }

const App = () => {
  return (
    <div className='title'>
        <H1>Hii I am from styled component</H1>
        <Form>
          <input type="text " placeholder='Enter your name' />
          <Button>View More</Button>
        </Form>
        <CSS_in_JS/>
    </div>
  )
}

export default App