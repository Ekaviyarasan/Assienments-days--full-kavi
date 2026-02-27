

import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px" }}>
      <img src={product.image} alt={product.name} width="200" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>

      <Link to={`/product/${product.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default ProductCard;