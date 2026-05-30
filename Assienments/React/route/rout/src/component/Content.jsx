// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// function Content() {
//     const nav=useNavigate()

//     const ms =()=>{
//         nav("/About")
//     }
//   return (
//     <>
//     <button onClick={ms}>hey</button>
    
    
//     </>
//   )
// }

// export default Content

// import React, { useState } from 'react'

// function Content() {
//   const [data,setData]= useState(["mern", "js","react"])
//   const kavi =()=>{
// setData([...data , "nodejs"])
//   }
//   return (
//     <>
//     <div>
//       {data.map((skill,i)=>(
//         <h1 key={i}>
//           <h2>{skill}</h2>
          
//         </h1>
        
      

//     ))}

//     </div>
    
//     <button onClick={kavi}>click</button>
    
//     </>
//   )
// }

// export default Content































import React, { useState } from 'react'

function Content() {
  const [courses,setCourses]=useState(["react","Mern","java"])
  const kavi =()=>{
    setCourses([...courses,"MangoDB","sql"])

  }
  return (
    <>
    <button onClick={kavi}>click</button>
    {courses.map((course,i)=>(
      <h1 key={i}>
        <h2>{course}</h2>
      </h1>

    ))}
    
    </>
  )
}

export default Content