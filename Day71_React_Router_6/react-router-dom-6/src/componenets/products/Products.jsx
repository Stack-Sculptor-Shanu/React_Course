import React, { Fragment, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Products = () => {
    let [pdata,setPdata] = useState(null)
    const {state} = useLocation()
    let prod = async ()=>{
        let myData = await fetch('https://fakestoreapi.in/api/products')
        let {products} = await myData.json()
        // console.log(products)
        setPdata(products)
    }

    useEffect(()=>{
      prod()
    },[])

    console.log(state)
  return (
    <div className='products'>
      <h1>Products</h1>
      {
        pdata===null?"loading data":pdata.map((p)=>{
          return <Fragment key={p.id}>
            <div className="container">
              <figure>
                <picture>
                  <img src={p.image} alt={p.title} height={150} width={150} />
                </picture>
              </figure>
            </div>
          </Fragment>
        })
      }
    </div>
  )
}

export default Products