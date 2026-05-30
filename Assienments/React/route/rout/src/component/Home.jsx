// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// function Home() {

//     const navigate=useNavigate()

//     const kavi = ()=>{
//         navigate("/about/1")
//     }
//   return (
//     <>
//     <h1>server</h1>
//     <button onClick={kavi}>click</button>
//     </>
//   )
// }

// export default Home

import React, { useState } from 'react'

function Home() {
  const [value,setValue]=useState(0)
  return (
    <>
    <button onClick={()=>setValue(value+1)}>Increase</button>
    <h1>{value %2===0 ?"even":"add"}</h1>
    <h2>{value}</h2>
    
    </>
  )
}

export default Home