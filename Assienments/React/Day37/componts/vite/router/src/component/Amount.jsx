



 import React from 'react'

 function Amount({rolex}) {
   return (
     <>
     <div>
         {rolex.map((i)=>(
             <div key={i.name}>
                 <p>{i.name}</p>
                 <h2>{i.money}</h2>

             </div>
         ))}
    



     </div>
    
    
     </>

   )
 }

 export default Amount


