import React from 'react'
import { useState } from 'react'

function Form() {
  const[name,setName]=useState(false)
  return (
    <>
    <button onClick={()=>setName(!name)}>click</button>
    <h1>{name? "old":"new"}</h1>
    <h3>{name}</h3>
    
    </>
  )
}

export default Form