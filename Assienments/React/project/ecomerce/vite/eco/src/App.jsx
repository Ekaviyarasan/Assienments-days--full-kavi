// // // import { useState } from "react";
// // // import { Routes, Route } from "react-router-dom";

// // // // Context
// // // import { CartProvider } from "./Context/CartContext";
// // // import { AuthProvider } from "./Context/AuthContext";

// // // // Components
// // // import Navbar from "./components/Navbar";
// // // import ProtectedRoute from "./components/ProtectedRoute";

// // // // Pages
// // // import Home from "./pages/Home";
// // // import ProductDetails from "./pages/ProductDetails";
// // // import Cart from "./pages/Cart";
// // // import Login from "./pages/Login";
// // // import AdvertisementPage from "./pages/AdvertisementPage";

// // // function App() {
// // //   const [search, setSearch] = useState("");

// // //   return (
// // //     <AuthProvider>
// // //       <CartProvider>
// // //         <Navbar search={search} setSearch={setSearch} />

// // //         <Routes>
// // //           <Route path="/" element={<Home search={search} />} />
// // //           <Route path="/login" element={<Login />} />

// // //           {/* 🔒 Protected Product Details */}
// // //           <Route
// // //             path="/product/:id"
// // //             element={
// // //               <ProtectedRoute>
// // //                 <ProductDetails />
// // //               </ProtectedRoute>
// // //             }
// // //           />

// // //           <Route path="/cart" element={<Cart />} />
// // //           <Route path="/ad" element={<AdvertisementPage />} />
// // //         </Routes>
// // //       </CartProvider>
// // //     </AuthProvider>
// // //   );
// // // }

// // // export default App;

// // import { Routes, Route } from "react-router-dom";
// // import { AuthProvider } from "./Context/AuthContext";

// // import Home from "./pages/Home";
// // import Login from "./pages/Login";
// // import ProductDetails from "./pages/ProductDetails";
// // import ProtectedRoute from "./components/ProtectedRoute";

// // function App() {
// //   return (
// //     <AuthProvider>
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/login" element={<Login />} />

// //         <Route
// //           path="/product/:id"
// //           element={
// //             <ProtectedRoute>
// //               <ProductDetails />
// //             </ProtectedRoute>
// //           }
// //         />
// //       </Routes>
// //     </AuthProvider>
// //   );
// // }

// // export default App;  
// import { Routes, Route } from "react-router-dom";
// import { useState } from "react";

// // Context
// import { AuthProvider } from "./Context/AuthContext";
// import { CartProvider } from "./Context/CartContext";

// // Components
// import Navbar from "./components/Navbar";
// import ProtectedRoute from "./components/ProtectedRoute";

// // Pages
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";
// import AdvertisementPage from "./pages/AdvertisementPages";

// function App() {
//   const [search, setSearch] = useState("");

//   return (
//     <AuthProvider>
//       <CartProvider>
//         {/* ✅ NAVBAR */}
//         <Navbar search={search} setSearch={setSearch} />

//         <Routes>
//           <Route path="/" element={<Home search={search} />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/ad" element={<AdvertisementPage />} />

//           {/* 🔒 Protected Product Details */}
//           <Route
//             path="/product/:id"
//             element={
//               <ProtectedRoute>
//                 <ProductDetails />
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//       </CartProvider>
//     </AuthProvider>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { AuthProvider } from "./Context/AuthContext";
import { CartProvider } from "./Context/CartContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [search, setSearch] = useState("");

  return (
    <AuthProvider>
      <CartProvider>
        <Navbar search={search} setSearch={setSearch} />

        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />

          <Route
            path="/product/:id"
            element={
              <ProtectedRoute>
                <ProductDetails />
              </ProtectedRoute>
            }
          />
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;