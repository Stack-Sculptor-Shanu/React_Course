// import React, { Fragment } from 'react';

// const Navbar = (props) => {
//   let { isLoggedIn, setIsLoggedIn } = props.data;

//   const IsAuthenticated = () => {
//     return (
//       <Fragment>
//         <li>
//           <a href="" onClick={() => setIsLoggedIn(false)}>Logout</a>
//         </li>
//       </Fragment>
//     );
//   };

//   const IsNotAuthenticated = () => {
//     return (
//       <Fragment>
//         <li>
//           <a href="">Login</a>
//         </li>
//         <li>
//           <a href="">Register</a>
//         </li>
//       </Fragment>
//     );
//   };

//   return (
//     <section id="navbar">
//       <article className="container">
//         <div className="logoBlock">Logo</div>
//         <div className="menu">
//           <ul>
//             <li>
//               <a href="">Home</a>
//             </li>
//             <li>
//               <a href="">Services</a>
//             </li>
//             {isLoggedIn ? IsAuthenticated() : IsNotAuthenticated()}
//           </ul>
//         </div>
//       </article>
//     </section>
//   );
// };

// export default Navbar;


//! without component conditional rendering
// import React from 'react';

// const Navbar = (props) => {
//   let { isLoggedIn, setIsLoggedIn } = props.data;

//   return (
//     <section id="navbar">
//       <article className="container">
//         <div className="logoBlock">Logo</div>
//         <div className="menu">
//           <ul>
//             <li>
//               <a href="">Home</a>
//             </li>
//             <li>
//               <a href="">Services</a>
//             </li>

//             {isLoggedIn ? (
//               <li>
//                 <a href="" onClick={() => setIsLoggedIn(false)}>Logout</a>
//               </li>
//             ) : (
//               <>
//                 <li>
//                   <a href="">Login</a>
//                 </li>
//                 <li>
//                   <a href="">Register</a>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </article>
//     </section>
//   );
// };

// export default Navbar;


//! Using if else conditional rendering
// import React, { Fragment } from 'react'

// const Navbar = (props) => {
//     const {isLoggedIn,setIsLoggedIn} = props.data
//     // console.log(isLoggedIn,setIsLoggedIn)
//     if(isLoggedIn){
//         return <Fragment>
//             <section>
//                 <article>
//                     <div>
//                         <ul>
//                             <li>
//                                 <a href="">Home</a>
//                             </li>
//                             <li>
//                                 <a href="">About</a>
//                             </li>
//                             <li>
//                                 <a href="">Services</a>
//                             </li>
//                             <li>
//                                 <a href="">Explore</a>
//                             </li>
//                             <li>
//                                 <a href="">Contact</a>
//                             </li>
//                             <li>
//                                 <a href="" onClick={()=>setIsLoggedIn(false)}>Logout</a>
//                             </li>
//                         </ul>
//                     </div>
//                 </article>
//             </section>
//         </Fragment>
//     }else{
//         return <Fragment>
//             <section>
//                 <article>
//                     <div>
//                         <ul>
//                             <li>
//                                 <a href="">Home</a>
//                             </li>
//                             <li>
//                                 <a href="">About</a>
//                             </li>
//                             <li>
//                                 <a href="">Services</a>
//                             </li>
//                             <li>
//                                 <a href="">Explore</a>
//                             </li>
//                             <li>
//                                 <a href="">Contact</a>
//                             </li>
//                             <li>
//                                 <a href="">Signup / Login</a>
//                             </li>
//                         </ul>
//                     </div>
//                 </article>
//             </section>
//         </Fragment>
//     }
//   return (
//     <div>

//     </div>
//   )
// }

// export default Navbar



//! Another example
import React, { Fragment } from 'react'

const Navbar = ({data}) => {
    // console.log(data)
    const {isLoggedIn,setIsLoggedIn} = data
    if(!isLoggedIn){
        return <Fragment>
            <li>
                <a href="">Login</a>
            </li>
            <li>
                <a href="">Register</a>
            </li>
        </Fragment>
    }
    return <Fragment>
        <li>
            <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
        </li>
    </Fragment>
}

export default Navbar