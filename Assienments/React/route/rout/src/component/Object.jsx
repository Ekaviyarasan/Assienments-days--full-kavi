import React, { useState } from 'react'

function Object() {
    const [ms,setMs]=useState({team:"csk",cup:5,cuptain:"Dhoni"}
        )

        const ipl =()=>{
            setMs({...ms,cuptain:"mahi"})
        }
  return (
    <>
    <button onClick={ipl}>winner</button>
    <h1>{ms.cuptain}</h1>
    </>
  )
}

export default Object