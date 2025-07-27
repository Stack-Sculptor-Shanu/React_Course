import React from 'react'
import Container from './componenets/Container'
import { theme, themeContext } from './componenets/themeContext'

const App = () => {
  return (
        <themeContext.Provider value={theme}>
            <Container/>
        </themeContext.Provider>
  )
}

export default App