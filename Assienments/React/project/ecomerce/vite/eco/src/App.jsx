
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Cart from "./pages/Cart";
// import ProductDetails from "./pages/ProductDetails";
// import { CartProvider } from "./Context/CartContext";

// function App() {
//   return (
//     <CartProvider>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//       </Routes>
//     </CartProvider>
//   );
// }

// export default App;

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import { CartProvider } from "./Context/CartContext";

function App() {
  const [search, setSearch] = useState("");

  return (
    <CartProvider>
      <Navbar search={search} setSearch={setSearch} />

      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </CartProvider>
  );
}

export default App;