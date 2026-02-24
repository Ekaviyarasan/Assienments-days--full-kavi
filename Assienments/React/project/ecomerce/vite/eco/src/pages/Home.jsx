


// import { Products } from "../data/Products";
// import ProductCard from "../components/ProductCard";

// function Home({ search }) {
//   const filteredProducts = Products.filter((product) =>
//     product.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1 style={{ textAlign: "center" }}>MASS MENS WEAR</h1>

//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           gap: "20px",
//         }}
//       >
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))
//         ) : (
//           <h2>No products found</h2>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;

import { Products } from "../data/Products";
import ProductCard from "../components/ProductCard";

function Home({ search = "" }) {
  const filteredProducts = Products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>MASS MENS WEAR</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <h2>No products found</h2>
        )}
      </div>
    </div>
  );
}

export default Home;