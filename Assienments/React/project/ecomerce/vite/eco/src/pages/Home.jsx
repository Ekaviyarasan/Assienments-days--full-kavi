

import { useState } from "react";
import { Products } from "../data/Products";
import ProductCard from "../components/ProductCard";

function Home({ search = "" }) {
  const [category, setCategory] = useState("All");
  const [rating, setRating] = useState("All");
  const [maxPrice, setMaxPrice] = useState(5000);

  const categories = ["All", ...new Set(Products.map((product) => product.category))];

  const filteredProducts = Products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || product.category === category;
    const matchesRating = rating === "All" || product.rating >= Number(rating);
    const matchesPrice = product.price <= maxPrice;
    return matchesSearch && matchesCategory && matchesRating && matchesPrice;
  });

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <section className="mb-8 p-6 bg-linear-to-br from-white to-blue-100 rounded-3xl shadow-lg">
        <h1 className="text-center text-blue-800 mb-2">Mass Mens Wear</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Find premium shirts, jackets, accessories, and curated deals. Use filters to discover the perfect fit fast.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-6">
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="px-4 py-3 rounded-xl border border-gray-300 min-w-48">
            {categories.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>

          <select value={rating} onChange={(e) => setRating(e.target.value)} className="px-4 py-3 rounded-xl border border-gray-300 min-w-48">
            <option value="All">All Ratings</option>
            <option value="4">4+ Stars</option>
            <option value="4.5">4.5+ Stars</option>
          </select>

          <div className="min-w-56">
            <label className="block mb-2 text-gray-600">Max Price: ₹{maxPrice}</label>
            <input
              type="range"
              min="100"
              max="5000"
              step="50"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      </section>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center p-10 rounded-2xl bg-white shadow-lg">
            <h2>No products found</h2>
            <p className="text-gray-500">Try a different category, rating filter, or search term.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;