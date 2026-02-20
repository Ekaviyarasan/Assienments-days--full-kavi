import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/cart">Cart ({cart.length})</Link>
    </nav>
  );
}

export default Navbar;