// import React, { Fragment } from 'react'
// import Item from './Item'

// const Products = ({data}) => {
//     console.log(data)
//     if(!data){
//         return <h1>Loading....</h1>
//     }
//     if(!data.length){
//         return <p>Sorry, product is empty</p>
//     }else{
//         return <ul>
//         {data.map(product=>{
//             return <Fragment key={product.id}>
//                 <Item key={product.id} {...product}/>
//             </Fragment>
//         })}
//     </ul>
//     }
// }

// export default Products

//!using ternary operator
// import React, { Fragment } from 'react'
// import Item from './Item'

// const Products = ({data}) => {
//     return(
//         <Fragment>
//             {
//                 !data?<h1>Loading....</h1>:!data.length?<p>Sorry, data is not available</p>:<ul>
//                           {data.map(product=>{
//              return <Fragment key={product.id}>
//                  <Item key={product.id} {...product}/>
//              </Fragment>
//          })}
//      </ul>}
//         </Fragment>
//     )
// }

// export default Products

//! Color Color 😍
// import React, { useState } from 'react'

// const Products = () => {
//   let [mode,setMode] = useState('a')
//   let [color,setColor]= useState('blue')
//   if(mode==='a',color==='red'){ // we can use AND OR here
//     return <h1 style={{color:color}}>I am mode A</h1>
//   }else if(mode==='b'){
//     return <h1>I am mode B</h1>
//   }else if(mode==='c'){
//     return <h1>I am mode C</h1>
//   }else{
//     return <h1>NO match found</h1>
//   }
// }

// export default Products


//!using switch operator
// import React, { useState } from 'react'

// const Products = () => {
//     const [mode,setMode]= useState('a')
//     const [color,setColor] = useState('yellow')
//     switch(mode,color){
//         case 'a'&&'yellow':
//             return <h1 style={{color:color}}>I am mode A</h1>;
//         case 'b':
//             return <h1>I am mode B</h1>;
//         case 'c':
//             return <h1>I am mode C</h1>;
//         default:
//             return <h1>No mode found....</h1>
//     }
// }

// export default Products


//!user spec
import React, { useState } from 'react'
import Users from '../auth/Users'

const Products = () => {
    const [users,setUsers]=useState([
        {
            id:1,
            name:'Shanu',
            age:20,
            company:'QSP',
            salary:20000,
            role:'employee'
        },
        {
            id:2,
            name:'Shashi',
            age:20,
            company:'TestYantra',
            salary:200000,
            role:'admin'
        },
    ])
  return (
    <div>
        <Users users = {users}/>
    </div>
  )
}

export default Products