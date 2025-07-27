import React, { Component, Fragment } from 'react'
import './style.css'

export default class App extends Component {
    state = {
        courses:[
            {
                course_id:1,
                course_name: "MERN stack",
                duration : 4,
                trainers: ["Shanu","Lavan","Sailaja"],
                price:60000,
                branch:"Bhubaneswar",
                course_Details: {
                    frontend: ["html","CSS","JS","React","Redux","Redux-toolkit","Reqct-Query","tailwindCSS","Bootstrap"],
                    backend: ["nodejs","express js","mongoose","rest API","graphQL"],
                    database: ["mongoDB","mysql","postgresql"],
                    tools:["git","github","VS code","linux"]
                }
            },
            {
                course_id:2,
                course_name: "Java full stack",
                duration : 4,
                trainers: ["Shanu","Lavan","Sailaja"],
                price:60000,
                branch:"Bhubaneswar",
                course_Details: {
                    frontend: ["html","CSS","JS","Java","Spring","springboot","tailwindCSS","Bootstrap"],
                    backend: ["nodejs","express js","mongoose","rest API","graphQL"],
                    database: ["mongoDB","mysql","postgresql"],
                    tools:["git","github","VS code","linux"]
                }
            },
            {
                course_id:3,
                course_name: "Python full stack",
                duration : 4,
                trainers: ["Shanu","Lavan","Sailaja"],
                price:60000,
                branch:"Bhubaneswar",
                course_Details: {
                    frontend: ["html","CSS","JS","Python","django","flask","Reqct-Query","tailwindCSS","Bootstrap"],
                    backend: ["nodejs","express js","mongoose","rest API","graphQL"],
                    database: ["mongoDB","mysql","postgresql"],
                    tools:["git","github","VS code","linux"]
                }
            }
        ]
    }
  render() {
    let {courses} = this.state
    return (
      <div>
        <section id='courseblock'>
        <article>
            <main>
                <header>
                    <h2>List of Courses</h2>
                </header>
                <aside className='container'>
                    {
                        courses.map((course)=>{
                            return(
                                <Fragment key={course.course_id}>
                                    <div className="list">
                                        <h2>{course.course_name}</h2>
                                        <p><span>Branch</span><span>{course.branch}</span></p>
                                        <p><span>duration:</span><span>{course.duration+" months"}</span></p>
                                        <p><span>price:</span>
                                        <span>{course.price} &#8377;</span>
                                        </p>
                                        <p>
                                            <span>trainers: </span>
                                            <div>{course.trainers.map((e,index)=>{
                                                return <Fragment key={index}>
                                                    <p>{e}</p>
                                                </Fragment>
                                            })}</div>
                                        </p>

                                        <span>Frontend Technologies</span>
                                        <div className='c'>
                                            {
                                                course.course_Details.frontend.map((front,index)=>{
                                                    return <Fragment key={index}>
                                                        <span>{front}</span>
                                                    </Fragment>
                                                })
                                            }
                                        </div>

                                        <span>Backend Technologies</span>
                                        <div className='c'>
                                            {
                                                course.course_Details.backend.map((back,index)=>{
                                                    return <Fragment key={index}>
                                                        <span>{back}</span>
                                                    </Fragment>
                                                })
                                            }
                                        </div>

                                        <span>Database Technologies</span>
                                        <div className='c'>
                                            {
                                                course.course_Details.database.map((db,index)=>{
                                                    return <Fragment key={index}>
                                                        <span>{db}</span>
                                                    </Fragment>
                                                })
                                            }
                                        </div>
                                    </div>
                                </Fragment>
                            )
                        })
                    }
                </aside>
            </main>
        </article>
        </section>
      </div>
    )
  }
}
