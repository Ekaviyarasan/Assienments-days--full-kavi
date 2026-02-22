
import React from "react";
import { Link } from "react-router-dom";
import { Products } from "../data/Products";

function AdvertisementPage() {
  // Pick top 4 featured products (rating >= 4.5)
  const featuredProducts = Products.filter((p) => p.rating >= 4.5).slice(0, 4);

  return (
    <div style={{ padding: "30px", background: "#f5f5f5" }}>
      {/* Hero Section */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <h1 style={{ fontSize: "48px", color: "#222" }}>
          MASS MENS WEAR
        </h1>
        <p style={{ fontSize: "18px", color: "#555" }}>
          Upgrade your style with our premium collection of shirts, blazers, accessories & more!
        </p>
        <Link to="/products">
          <button
            style={{
              marginTop: "20px",
              padding: "12px 30px",
              background: "#e63946",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Explore All Products
          </button>
        </Link>
      </div>

      {/* Featured Products Section */}
      <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#222" }}>
        🔥 Featured Products 🔥
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              width: "250px",
              textAlign: "center",
              background: "#fff",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={product.image}
              alt={product.name}
              width="200"
              style={{ borderRadius: "8px" }}
            />
            <h3>{product.name}</h3>
            <p style={{ color: "#777" }}>Brand: {product.brand}</p>
            <p style={{ fontWeight: "bold", color: "#222" }}>${product.price}</p>
            <Link to={`/product/${product.id}`}>
              <button
                style={{
                  padding: "8px 15px",
                  background: "#222",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdvertisementPage;