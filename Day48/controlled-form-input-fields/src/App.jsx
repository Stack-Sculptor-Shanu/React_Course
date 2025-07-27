import React, { Fragment, useState } from 'react'
import Country from './country.json'
import './index.css'

const App = () => {
    let [state,setState] = useState({
        title:"",
        comment: "",
        gender: '',
        js_lib: "",
        loading:false
    })

    let [skills, setSkills] = useState("")

    let [country, setCountries] = useState(Country)

    let {title, comment, gender, loading, js_lib} = state

    let handleChange = e => {
        let {name,value} = e.target;
        setState({...state, [name]:value, loading : true})
    }
    
    let handleCheckBox = (e) =>{
        console.log(e.target.checked)
        let {value} = e.target;
        if(e.target.checked){
            setSkills(oldCehcked => {
                return [...oldCehcked, value]
            })
        }else{
            setSkills(oldCehcked => {
                console.log(oldCehcked)
            })
        }
    }

    let handleCountryChange = () => {
        let {name,value} = e.target;
        setCountries({...state, [name]:value})
    }

    let handleSubmit = e => {
        e.preventDefault()
        try {
            console.log(state)
            setState({loading:false, title:"", comment:""})
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">title</label>
                <input type="text" name='title' id='title' placeholder='enter title' value={title} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label htmlFor="comment">Write your comments</label>
                <textarea name="comment" id="comment" style={{resize:'none'}} value={comment} onChange={handleChange}></textarea>
            </div>
            {/* How to handle radio button */}
            <div className="form-group" name="gender" value= {gender} onChange={handleChange}>
                <label htmlFor="gender">Select gender</label>
                <input type="radio" name='gender' value="male"/> Male
                <input type="radio" name='gender' value="female"/> Female
                <input type="radio" name='gender' value="others"/> Others
            </div>

            {/* How to handle checkbox */}
            <div className="form-group" name = 'skills' value={skills} onChange={handleCheckBox}>
                <label htmlFor="skills">Select Skills</label>
                <input type="checkbox" name='skills' id='skills' value="JavaScript" /> JavaScript
                <input type="checkbox" name='skills' id='skills' value="NodeJS" /> NodeJS
                <input type="checkbox" name='skills' id='skills' value="ReactJS" /> ReactJS
                <input type="checkbox" name='skills' id='skills' value="ExpressJS" /> ExpressJS
                <input type="checkbox" name='skills' id='skills' value="MongoDB" /> MongoDB
                <input type="checkbox" name='skills' id='skills' value="Selenium" /> Selenium
                <input type="checkbox" name='skills' id='skills' value="Java" /> Java
                <input type="checkbox" name='skills' id='skills' value="SpringBoot" /> SpringBoot
                <input type="checkbox" name='skills' id='skills' value="Python" /> Python
            </div>

            {/* Select list */}
            <div className="form-group">
                <label htmlFor="Choose JS Libraries">
                    <select name="js_lib" value={js_lib} onChange={handleChange}>
                        <option value="react">React</option>
                        <option value="momentjs">MomentJS</option>
                        <option value="jquery">Jquery</option>
                    </select>
                </label>
            </div>

            {/* Country Block */}
            <div className="form-group">
                <label htmlFor="countries">Select country</label>
                <select name="countries" id="countries">
                    {
                        country.map(countries =>{
                            return <Fragment key={countries.code}>
                                <option value={countries.code}>
                                    <Fragment>
                                        <span>
                                            <picture>
                                                <img src={countries.flag} alt={countries.code} />
                                            </picture>
                                        </span>
                                        <span>
                                            {countries.name}
                                        </span>
                                    </Fragment>
                                </option>
                            </Fragment>
                        })
                    }
                </select>
            </div>

            <div className="form-group">
                <button disabled={!state.title&&!state.comment ? true :false}>
                    {loading?"loading":"submit"}
                </button>
            </div>
        </form>
    </div>
  )
}

export default App