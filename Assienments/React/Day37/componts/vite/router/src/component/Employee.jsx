 import React from 'react'
 import Amount from './Amount'


 function Employee() {
     const salary=[
         {
         name:"kavi",
         money:40000
     }   
     ,{name:"kavi",
         money:40000},

         {name:"kavi",
         money:40000}
     ]



   return (
     <>
     <Amount rolex={salary}/>
     </>
   )
 }

 export default Employee
