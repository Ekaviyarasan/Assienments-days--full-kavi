import React, { useState } from 'react'

function Input() {
  const [name,serName]=useState({
    player:"",
    Gmail:""
  })
  return (
    <>
    <input   className='bg-red-500 text-white-300'     type='text' placeholder='Players' onChange={(e)=>serName({...name,player:e.target.value})}/>
    <h1>{name.player}</h1>
    </>
  )
}

export default Input