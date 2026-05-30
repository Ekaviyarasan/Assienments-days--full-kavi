import React, { useState } from 'react'

function Prev() {
    const [values,setValues]=useState(["js","react"])
    const kavi =()=>{
        setValues(Prev=>[...Prev,"mangoDb"])
    }
  return (
    <>
    <button onClick={kavi}>prev</button>
    <h1>
        {values.map((value,i)=>(
            <h2 key={i}>
                <h3>{value}</h3>

            </h2>


        ))}
    </h1>
    
    </>
  )
}

export default Prev