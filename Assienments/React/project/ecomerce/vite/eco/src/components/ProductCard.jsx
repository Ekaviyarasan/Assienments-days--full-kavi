

// // function ProductCard({ product }) {
// //   return (
// //     <div>
// //       <img src={product.image} alt={product.name} width="300" />

// //       <h3>{product.name}</h3>

// //       <p>Brand: {product.brand}</p>
// //       <p>Category: {product.category}</p>
// //       <p>Rating: {product.rating}</p>
// //       <p>Stock: {product.stock}</p>

// //       <p>Price: ${product.price}</p>
// //     </div>
// //   );
// // }
// // export default ProductCard;


// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { CartContext } from "../Context/CartContext";

// function ProductCard({ product }) {
//   const { addToCart } = useContext(CartContext);

//   return (
//     <div
//       style={{
//         border: "1px solid #ccc",
//         padding: "15px",
//         width: "250px",
//         textAlign: "center",
//         borderRadius: "8px",
//       }}
//     >
//       <img src={product.image} alt={product.name} width="200" />

//       <h3>{product.name}</h3>
//       <p>Brand: {product.brand}</p>
//       <p>Price: ${product.price}</p>

//       <button
//         onClick={() => addToCart(product)}
//         style={{ marginRight: "10px" }}
//       >
//         Add to Cart
//       </button>

//       <Link to={`/product/${product.id}`}>
//         <button>View Details</button>
//       </Link>
//     </div>
//   );
// }

// export default ProductCard;

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