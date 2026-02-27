


 import { Link } from "react-router-dom";
 import { useContext } from "react";
 import { CartContext } from "../Context/CartContext";

 function Navbar({ search, setSearch }) {
   const { cart } = useContext(CartContext);

   return (
     <nav
       style={{
         padding: "15px",
         background: "#222",     
 
         color: "white",
         display: "flex",
         justifyContent: "space-between",
         alignItems: "center",
         width:"1330px"
       }}
     >
       <div>
         <Link to="/" style={{ color: "white", marginRight: "15px" }}>
           Home
         </Link>
         <Link to="/cart" style={{ color: "white" }}>
           Cart ({cart.length})
         </Link>
       </div>

       {/* 🔍 Search Bar */}
       <input
         type="text"
         placeholder="Search products..."
         value={search}
         onChange={(e) => setSearch(e.target.value)}
         style={{           padding: "6px",
           borderRadius: "5px",
           border: "none",
         }}
       />
     </nav>
   );
 }

 export default Navbar;


