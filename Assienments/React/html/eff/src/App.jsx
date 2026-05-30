 import React, {  useState,useEffect } from 'react'

// function App() {
  
  
//      const [name,setName]=useState(0)
//   console.log("hi");
//   useEffect(()=>{
//     console.log("who");
    
//     const interval=setInterval(()=>{
//       setName(prev=>prev+1)
//       console.log("hlo");
      
//     },2000)



//   return ()=>clearInterval(interval)
//   },)


//   return (
//     <>
//   <h1>{name}</h1>  
//     </>
//   )
// }

// export default App



// import React, { createContext } from 'react'

//  export const Contex= createContext()




function App() {
  const [first, setFirst] = useState([]);

  const datas = async () => {
    try {
      const fetchData = await fetch("https://dummyjson.com/products"); // ✅ correct API
      const res = await fetchData.json();
      setFirst(res.products); // ✅ correct key
    } catch (err) {
      console.log(err, "error");
    }
  };

  useEffect(() => {
    datas();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {first.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default App;