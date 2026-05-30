// import React, { useState } from 'react'
// import Home from './componet/Home';

// function App() {
//   const [values,setValues]=useState({name:"",Phone:""})
//   console.log(values.Phone);
  
//   return (
//     <>
//     <input type='text' placeholder='name' onChange={(e)=>{setValues({...values,name: e.target.value})}}/>





// <Home/>































// <input type='number' onChange={(e)=>{setValues({...values,Phone: e.target.value})}}/>

//     <h1>{ values.name}</h1>
//     <h2>{values.Phone}</h2>
//     </>
//   )
// }

// export default App


import React from 'react'
import Home from './componet/Home'
import Usecon from './componet/Usecon'

function App() {
  return (
    <>
    <Home/>
    <Usecon/>
    </>
  )
}

export default App