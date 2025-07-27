import React, { Fragment, useState } from 'react'
import cricketPlayers from '../../players.json'

const Players = () => {
    let [players, setplayers] = useState(cricketPlayers)
  return (
    <div className='players'>
        <h1>Cricket Players</h1>
        {
            players.map.length>0 && players.map((cp)=>{
                return <Fragment key={cp.id}>
                    <div className="container">
                        <figure>
                            <picture>
                                <img src={cp.image} alt={cp.name} height={150} width={150} />
                            </picture>
                        </figure>
                    </div>
                </Fragment>
            })
        }
    </div>
  )
}

export default Players