


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
import { WishlistContext } from "../Context/WishlistContext";
import { AuthContext } from "../Context/AuthContext";
import copy from "../assets/copy.jpg";

function Navbar({ search, setSearch }) {
  const { getTotalItems } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="p-6 bg-linear-to-r from-blue-900 to-blue-700 text-white flex flex-wrap justify-between items-center gap-4">
      <div className="flex items-center gap-6 flex-wrap">
        <img src={copy} alt="brand logo" className="w-24 rounded-2xl" />
        <Link to="/" className="text-white no-underline text-lg font-bold">
          Landing
        </Link>
        <Link to="/products" className="text-white no-underline text-lg font-bold">
          Shop
        </Link>
        <Link to="/ad" className="text-white no-underline text-lg font-bold">
          Offers
        </Link>
        <Link to="/cart" className="text-white no-underline text-lg font-bold">
          Cart ({getTotalItems()})
        </Link>
        <Link to="/wishlist" className="text-white no-underline text-lg font-bold">
          Wishlist ({wishlist.length})
        </Link>
        {user && (
          <Link to="/dashboard" className="text-white no-underline text-lg font-bold">
            Dashboard
          </Link>
        )}
      </div>

      <div className="flex items-center gap-3 flex-wrap min-w-64">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 min-w-48 p-3 rounded-full border-none"
        />
        {user ? (
          <button
            onClick={logout}
            className="px-6 py-3 rounded-full border border-white bg-transparent text-white cursor-pointer font-bold"
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="px-6 py-3 rounded-full bg-yellow-400 text-blue-900 font-bold no-underline">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;


