import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'

const Axios = () => {
    let [product, setProduct] = useState(null)
    // let fetchProduct = async ()=> {
    //     let data = await window.fetch("https://api.escuelajs.co/api/v1/products")
    //     let finalData = await data.json();
    //     console.log(finalData)
    //     setProduct(finalData)
    // }
    let fetchProduct = async ()=> {
        let {data} = await axios.get("https://api.escuelajs.co/api/v1/products")
        console.log(data)
        setProduct(data)
    }
    useEffect(()=>{
        fetchProduct()
    },[])
  return (
    <aside className='flex-container'>
        {
            product === null? 'loading....': product.map((p)=>{
                return <div className="container" key={p.id}>
                    <img src={p.images[0]} alt={p.title } height={250} width={250} />
                    <h2>{p.title}</h2>
                </div>
            })
        }
    </aside>
  )
}

export default Axios