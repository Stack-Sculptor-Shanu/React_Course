import React from 'react'

const Button = ({children,onTest, handleName}) => {
  return (
    <div>
        <button onClick={onTest}>{children}</button>
        <button onClick={handleName}>Change Name</button>
    </div>
  )
}

export default Button