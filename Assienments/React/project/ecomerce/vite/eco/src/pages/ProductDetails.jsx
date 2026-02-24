

// // import { useParams } from "react-router-dom";
// // import { Products } from "../data/Products";
// // import { useContext } from "react";
// // import { CartContext } from "../Context/CartContext";

// // function ProductDetails() {
// //   const { id } = useParams();
// //   const { addToCart } = useContext(CartContext);

// //   const product = Products.find((p) => p.id === Number(id));

// //   if (!product) {
// //     return <h2>Product Not Found</h2>;
// //   }

// //   return (
// //     <div style={{ padding: "20px" }}>
// //       <h2>{product.name}</h2>

// //       <img src={product.image} alt={product.name} width="300" />

// //       <p><strong>Brand:</strong> {product.brand}</p>
// //       <p><strong>Category:</strong> {product.category}</p>
// //       <p><strong>Rating:</strong> ⭐ {product.rating}</p>
// //       <p><strong>Stock:</strong> {product.stock}</p>

// //       <p><strong>Description:</strong> {product.description}</p>
// //       <p><strong>Material:</strong> {product.material}</p>
// // <p><strong>Color:</strong> {product.color}</p>
// // <p><strong>Delivery:</strong> {product.delivery}</p>

// //       <h3>Price: ${product.price}</h3>

// //       <button
// //         onClick={() => addToCart(product)}
// //         style={{
// //           padding: "10px 20px",
// //           background: "black",
// //           color: "white",
// //           border: "none",
// //           cursor: "pointer",
// //         }}
// //       >
// //         Add to Cart
// //       </button>
// //     </div>
// //   );
// // }

// // export default ProductDetails;

// import { useParams } from "react-router-dom";
// import { Products } from "../data/Products";
// import { useContext } from "react";
// import { CartContext } from "../Context/CartContext";

// function ProductDetails() {
//   const { id } = useParams();
//   const { addToCart } = useContext(CartContext);

//   const product = Products.find((p) => p.id === Number(id));

//   if (!product) {
//     return <h2>Product Not Found</h2>;
//   }

//   return (
//     <div style={{ padding: "30px", maxWidth: "800px", margin: "auto" }}>
//       <h2>{product.name}</h2>

//       <img
//         src={product.image}
//         alt={product.name}
//         width="300"
//         style={{ borderRadius: "10px" }}
//       />

//       <p><strong>Brand:</strong> {product.brand}</p>
//       <p><strong>Category:</strong> {product.category}</p>
//       <p><strong>Price:</strong> ₹{product.price}</p>
//       <p><strong>Rating:</strong> ⭐ {product.rating}</p>
//       <p><strong>Stock:</strong> {product.stock}</p>
//       <p><strong>Color:</strong> {product.color}</p>

//       {product.size && (
//         <p><strong>Size:</strong> {product.size}</p>
//       )}

//       {product.material && (
//         <p><strong>Material:</strong> {product.material}</p>
//       )}

//       {product.delivery && (
//         <p><strong>Delivery:</strong> {product.delivery}</p>
//       )}

//       <p><strong>Description:</strong> {product.description}</p>

//       <button
//         onClick={() => addToCart(product)}
//         style={{
//           padding: "12px 25px",
//           background: "black",
//           color: "white",
//           border: "none",
//           borderRadius: "6px",
//           cursor: "pointer",
//           marginTop: "20px",
//         }}
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// export default ProductDetails;

import { useParams } from "react-router-dom";
import { Products } from "../data/Products";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = Products.find(
    (item) => item.id === parseInt(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.name}</h2>
      <img src={product.image} width="300" alt={product.name} />

      <p><b>Brand:</b> {product.brand}</p>
      <p><b>Category:</b> {product.category}</p>
      <p><b>Price:</b> ₹{product.price}</p>
      <p><b>Rating:</b> ⭐ {product.rating}</p>
      <p><b>Stock:</b> {product.stock}</p>
      <p><b>Color:</b> {product.color}</p>
      <p><b>Description:</b> {product.description}</p>
      <p><b>Material:</b> {product.material}</p>
      <p><b>Delivery:</b> {product.delivery}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;