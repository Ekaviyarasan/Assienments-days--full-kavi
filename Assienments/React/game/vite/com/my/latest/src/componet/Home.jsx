// // import React, { useState } from 'react'

import { useEffect, useState } from "react"

// // function Home() {
// //   const [value, setValue] = useState({ name: "" });

// //   const recort = (e) => {
// //     const { name, value: inputValue } = e.target;

// //     setValue(prev => ({
// //       ...prev,
// //       [name]: inputValue
// //     }));
// //   };

// //   const [data, setData] = useState("");

// //   const yorac = (e) => {
// //     e.preventDefault();
// //     setData(value);
// //   };

// //   return (
// //     <>
// //       <form onSubmit={yorac}>
// //         <input
// //           type='text'
// //           placeholder='UR Name'
// //           name='name'
// //           onChange={recort}
// //         />
// //         <button type="submit">Submit</button>
// //       </form>

// //       <h2>{data.name}</h2>
// //     </>
// //   );
// // }

// // export default Home;



































// import React, { useState } from 'react'

// function Home() {
//   const [row,setRow]=useState({name:""})
//   const see=(e)=>{
//     const{name,row:inputValue}=e.target;

//     setRow(prev=>({
//       ...prev,[name]:inputValue
//     }))
//   };
//   const[data,setDate]=useState(null)
//   const clk=(e)=>{
// preventDefault()
// setDate(row)
//   }
//   return (
//     <>
//     <form onChange={clk}>
// <input type='text' name='name' onChange={see}/>
// <input type='submit'>regis</input>
//     </form>
    
    
//     </>
//   )
// }

//  export default Home



import React from 'react'

function Home() {
    const[data,setData]=useState([])
    useEffect(()=>{
        const featchdata =async()=>{
            try{
                const value=await fetch("https://dummyjson.com/products")
                const res= await value.json()
                setData(res.products)
            }
            catch(err){
                console.log(err,"error");
                
            }

        }
        featchdata()
    },[])
  return (
    <>
    {data.map((num)=>(
        <div className="bg-pink-400 w-30  flex justify-center gap-2 m-1 " key={num.id}>
            <h2  className="bg-red-500 w-30 h-30  flex justify-center">{num.title}</h2>
            <h3>{num.rating}</h3>
            
           
        </div>
    ))}
     <button className="bg-amber-300">click</button>
    </>
  )
}

export default Home