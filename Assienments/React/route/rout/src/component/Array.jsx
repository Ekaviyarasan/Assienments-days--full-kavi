// import React, { useState } from 'react'

// function Array() {

//     const [name,setName]=useState({player:"ms dhoni" ,jurcy:7})
//     const ipl =()=>{
//         setName({...name,jurcy:10})
//     }

//   return (
//     <>
//     <button onClick={ipl}>click</button>
//     <h1>{name.player}</h1>
//     <h1>{name.jurcy}</h1>
    

    
//     </>
//   )
// }

// export default Array

















import React, { useState } from 'react'

function Array() {
  const [kl,setKl]=useState({
    name:"jayam",
    age:34
  })
  const josam=()=>{
    setKl(prev=>({
...prev, name:"ajithyeee"
    }))
  }
  return (
    <>
    <button onClick={josam}>js</button>
    <h1>{kl.name}</h1>
    <h1>{kl.age}</h1>
    </>
  )
}

export default Array