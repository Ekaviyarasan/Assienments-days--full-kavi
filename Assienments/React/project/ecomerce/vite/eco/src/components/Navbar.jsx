


//  import { Link } from "react-router-dom";
//  import { useContext } from "react";
//  import { CartContext } from "../Context/CartContext";
//  import logo from "../assets/logo.jpg"; 


//  function Navbar({ search, setSearch }) {
//    const { cart } = useContext(CartContext);

//    return (
//      <nav
//        style={{
//          padding: "7px",
//          background: "#0ed9e7",     
 
//          color: "white",
//          display: "flex",
//          justifyContent: "space-between",
//          alignItems: "center",
//          width:"1330px",
         
//        }}
//      >
//        <div>
//          <Link to="/" style={{ color: "white", marginRight: "15px",fontSize:"30px" }}>
//            Home
//          </Link>
//          <Link to="/cart" style={{ color: "white" , fontSize:"30px"}}>
//            Cart ({cart.length})
//          </Link>
//          <Link to="/"style={{color:"white", marginRight:"15px", fontSize:"30px"}}>Exit</Link>
//        </div>

//        <img src={"logo"} alt=""></img>

//        {/* 🔍 Search Bar */}
//        <input
//          type="text"
//          placeholder="Search products..."
//          value={search}
//          onChange={(e) => setSearch(e.target.value)}
//          style={{           padding: "6px",
//            borderRadius: "5px",
//            border: "none",
//          }}
//        />
      
//      </nav>
//    );
//  }

//  export default Navbar;


import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import copy from "../assets/copy.jpg";   // 👈 import image

function Navbar({ search, setSearch }) {
  const { cart } = useContext(CartContext);

  return (
    <nav
      style={{
        padding: "7px",
        background: "#0ed9e7",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "1330px",
      }}
    >
      <div>
        <Link to="/" style={{ color: "white", marginRight: "15px", fontSize: "30px" }}>
          Home
        </Link>
        <Link to="/cart" style={{ color: "white", fontSize: "30px" }}>
          Cart ({cart.length})
        </Link>
        <Link to="/" style={{ color: "white", marginRight: "15px", fontSize: "30px" }}>
          Exit
        </Link>
      </div>

      
      <img src={copy} alt="logo" style={{ height: "50px" ,width:"300px", }} />

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "6px",
          borderRadius: "5px",
          border: "none",
        }}
      />
    </nav>
  );
}

export default Navbar;


