// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// function About() {
//      const navigate =useNavigate()

//     const kl = ()=>{
//         navigate("/Content/2")

//     }
//   return (
   
//     <>

    
//     <button onClick={kl}>surpire</button>
//     </>
//   )
// }

// export default About






























import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigete=useNavigate()
  const kavi=()=>{
    navigete('/form')
  }
  return (
    <>

    

    <button onClick={kavi}>oops</button>
    </>
  )
}

export default About