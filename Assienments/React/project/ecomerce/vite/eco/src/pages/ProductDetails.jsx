import { useParams } from "react-router-dom";
import { Products } from "/src/data/Products.js";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = Products.find((p) => p.id == id);

  if (!product) return <h2>Product not found</h2>;

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} width="200" />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

 export default ProductDetails;