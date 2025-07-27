import React from 'react'
import Counter from './components/Counter'
import CounterProvider from './context/CounterContext'

const App = () => {
  return (
    <section id='mainContainer'>
        <article>
            <CounterProvider>
                <Counter/> {/*Counter is the child of counter provider*/}
            </CounterProvider>
        </article>
    </section>
  )
}

export default App