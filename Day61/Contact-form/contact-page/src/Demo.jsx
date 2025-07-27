import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    background-color:aquamarine;
    height:100px;
    width:100px;
    border-radius:10px;
    &:hover{
        background-color:red;
    }
`
const Demo = () => {
  return (
    <Div className='bg-blue'>
        
    </Div>
  )
}

export default Demo