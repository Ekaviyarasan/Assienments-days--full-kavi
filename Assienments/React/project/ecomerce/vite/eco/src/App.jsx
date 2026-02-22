
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import AdvertisementPage from "./pages/AdvertisementPages";

// Components
import Navbar from "./components/Navbar";

// Context
import { CartProvider } from "./Context/CartContext";

function App() {
  const [search, setSearch] = useState(""); // For search bar in Navbar

  return (
    <CartProvider>
      {/* Navbar */}
      <Navbar search={search} setSearch={setSearch} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/ad" element={<AdvertisementPage />} />
      </Routes>
    </CartProvider>
  );
}

export default App;