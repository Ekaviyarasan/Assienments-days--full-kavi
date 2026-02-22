

import { useParams } from "react-router-dom";
import { Products } from "../data/Products";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = Products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.name}</h2>

      <img src={product.image} alt={product.name} width="300" />

      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Rating:</strong> ⭐ {product.rating}</p>
      <p><strong>Stock:</strong> {product.stock}</p>

      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Material:</strong> {product.material}</p>
<p><strong>Color:</strong> {product.color}</p>
<p><strong>Delivery:</strong> {product.delivery}</p>

      <h3>Price: ${product.price}</h3>

      <button
        onClick={() => addToCart(product)}
        style={{
          padding: "10px 20px",
          background: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;