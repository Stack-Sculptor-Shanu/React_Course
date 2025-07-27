import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    width:100%;
    height:100vh;
`
const Article = styled.article`
    width:90%;
    height:inherit;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const H1 = styled.h1`
padding:10px;
color:#009688;
font-size:28px;
text-transform:uppercase;
font-weight:400;
letter-spacing:1.6px;
font-style:revert-layer;
`
const Main = styled.main`
    background:white;
    width:400px;
    height:auto;
    padding:10px;
    border:1px solid #0096882e;
    border-radius:10px;
`
const Div = styled.div`
    margin:10px;
`
const Label = styled.label `
    width:100%;
    display:block;
    padding:5px 0;
    font-size:16px;
    font-weight:600;
`
const Input = styled.input`
    width:100%;
    padding:10px;
    margin:10px 0;
    border:1px solid #ccc;
    border-radius:7px
`
const Button = styled.button`
    border:1px solid #607D8B;
    width:100%;
    padding:10px;
    border-radius:7px;
    color:#fff;
    background:#009688;
    font-size:16px;
    text-transform:uppercase;
    font-weight:500;
    margin:10px 0;
    cursor:pointer;
    &:hover{
    background:${(bg)=>bg.color}
    }
`

const ContactForm = () => {
    // console.log(color)
  return (
    <div>
        <Section>
            <Article>
                <header>
                    <H1>Contact Form</H1>
                </header>
                <Main>
                    <Div className="form-group">
                        <Label htmlFor="email">Email</Label>
                        <Input type="text" placeholder='Enter your mail' />
                    </Div>
                    <Div className="form-group">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" placeholder='Enter your password' />
                    </Div>
                    <Div className="form-group">
                        <Button color="black">Submit</Button>
                    </Div>
                </Main>
            </Article>
        </Section>
    </div>
  )
}

export default ContactForm