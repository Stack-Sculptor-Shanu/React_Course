import React from 'react'
import { AirtelContextApi } from '../../context/AirtelContext'

const Sailaja = () => {
    let {Consumer} = AirtelContextApi
  return (
    <div>
        <div>
            <h1>Sailaja here</h1>
            <Consumer>
                {
                    ({network,sim_type,price, data,duration,nearest_tower})=> {
                        return <>
                        <h1>Network: {network}</h1>
                        <p>Price: &#8377;{price}</p>
                        <p>Sim Type: {sim_type}</p>
                        <p>Data: {data}GB</p>
                        <p>Validity: {duration} days</p>
                        <p>Nearest Tower: {nearest_tower}</p>
                        </>
                    }
                }
            </Consumer>
        </div>
    </div>
  )
}

export default Sailaja