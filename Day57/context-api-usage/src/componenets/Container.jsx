import React, { useContext, useRef, useState } from 'react'
import { themeContext } from './themeContext'

const Container = () => {
    const [toggle,setToggle] = useState(false)
    let {light,dark} = useContext(themeContext)
    let elemeRef = useRef();
    let handleTheme=()=>{
        setToggle(!toggle)
        if(toggle === true){
            elemeRef.current.style.background = dark.background;
            elemeRef.current.style.color = dark.color;
        }else{
            elemeRef.current.style.background = light.background;
            elemeRef.current.style.color = light.color;
        }
    }
    document.addEventListener("load", ()=>{
        document.body
    })
  return (
    <div ref={elemeRef}>
        <h1>I am container block</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ullam iusto distinctio! Excepturi eaque, amet nisi qui aut nostrum cum, consectetur, rerum neque aliquam aliquid delectus et commodi asperiores quis nihil? Ea expedita, eius suscipit ratione, autem ad, similique facilis alias eveniet totam numquam culpa nobis! Quidem quam quae exercitationem odio, id deserunt fugiat corrupti quia odit dolore repellat illo atque porro facilis velit sapiente itaque incidunt vel quasi ea quo dignissimos veritatis ullam optio! Sunt odit adipisci omnis voluptas ab ducimus sit est nihil consequatur pariatur cumque distinctio vero, vitae libero! Ad facere quidem aspernatur a officia fuga obcaecati.</p>

        <button onClick={handleTheme}>{toggle?"dark":"light"}</button>
    </div>
  )
}

export default Container