

import { useParams } from "react-router-dom";
import { Products } from "../data/Products";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [message, setMessage] = useState("");

  const product = Products.find(
    (item) => item.id === parseInt(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    setMessage("✅ Product added to cart successfully!");

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.name}</h2>

      {message && (
        <p style={{ color: "green", fontWeight: "bold" }}>
          {message}
        </p>
      )}

      <img src={product.image} width="300" alt={product.name} />

      <p><b>Brand:</b> {product.brand}</p>
      <p><b>Price:</b> ₹{product.price}</p>

      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;