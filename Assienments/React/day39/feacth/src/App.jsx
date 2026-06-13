// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [data,setData]=useState([])
//   useEffect(()=>{
//     const feacth = async ()=>{
//       try{
//         const resolve= await fetch("https://dummyjson.com/products")
//         const value=  await resolve.json()
//         console.log(value.products);
//         setData(value.products)

//       }
//       catch(err){
//         console.log(err,"err");
        
//       }
//     }
//     feacth()
//   },[])
//   return (
//     <div className=' m-3 w-300 h-200 flex-7 gap-1.5 bg-pink-300 align-baseline ' >

   
//     {data.map((data)=>(
//       <h1 key={data.id}>
//         <h2>{data.price}</h2>
//         <h3>{data.title}</h3>
//       </h1>

//     ))}
//     </div> 
    
//   )
// }

// export default App


import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const value = await response.json();
        setData(value.products);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-48 object-cover"
          />

          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">
              {item.title}
            </h2>

            <p className="text-gray-600 mb-2">
              {item.category}
            </p>

            <p className="text-green-600 font-bold text-xl">
              ₹{item.price}
            </p>

            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;