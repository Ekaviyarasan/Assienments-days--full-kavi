// // // import { Link } from "react-router-dom";
// // // import { useContext } from "react";
// // // import { CartContext } from "../Context/CartContext";

// // // function Navbar() {
// // //   const { cart } = useContext(CartContext);

// // //   return (
// // //     <nav style={{ padding: "10px", background: "#eee" }}>
// // //       <Link to="/">Home</Link> |{" "}
// // //       <Link to="/cart">Cart ({cart.length})</Link>
// // //     </nav>
// // //   );
// // // }

// // // export default Navbar;

// // import { Link } from "react-router-dom";
// // import { useContext } from "react";
// // import { CartContext } from "../Context/CartContext";
// // import "./Navbar.css";

// // function Navbar() {
// //   const { cart } = useContext(CartContext);

// //   return (
// //     <nav
// //       style={{
// //         padding: "10px",
// //         background: "#222",
// //         color: "white",
// //         display: "flex",
// //         justifyContent: "space-between",
// //         width:"1330px"
// //       }}
// //     >
// //       <div>
// //         <Link to="/" style={{ color: "white", marginRight: "20px" }}>
// //           Home
// //         </Link>

// //         <Link to="/cart" style={{ color: "white" }}>
// //           Cart ({cart.length})
// //         </Link>
// //       </div>

// //       <h3>MASS MENS VIEWER</h3>
// //     </nav>
// //   );
// // }


// // export default Navbar;


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


// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { CartContext } from "../Context/CartContext";
// import { AuthContext } from "../Context/AuthContext";

// function Navbar({ search, setSearch }) {
//   const { cart } = useContext(CartContext);
//   const { user, logout } = useContext(AuthContext);

//   return (
//     <nav
//       style={{
//         padding: "15px",
//         background: "#222",
//         color: "white",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//       }}
//     >
//       {/* Left Side */}
//       <div>
//         <Link to="/" style={{ color: "white", marginRight: "15px" }}>
//           Home
//         </Link>

//         <Link to="/cart" style={{ color: "white", marginRight: "15px" }}>
//           Cart ({cart.length})
//         </Link>

//         <Link to="/ad" style={{ color: "white" }}>
//           Offers
//         </Link>
//       </div>

//       {/* Search Bar */}
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{
//           padding: "6px",
//           borderRadius: "5px",
//           border: "none",
//         }}
//       />

//       {/* Right Side Login / Logout */}
//       <div>
//         {user ? (
//           <>
//             <span style={{ marginRight: "10px" }}>
//               Welcome, {user.username}
//             </span>
//             <button
//               onClick={logout}
//               style={{
//                 padding: "6px 12px",
//                 background: "red",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "5px",
//               }}
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <Link to="/login" style={{ color: "white" }}>
//             Login
//           </Link>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;