import { Link } from "react-router-dom";
import { Products } from "../data/Products";

function Landing() {
  const featuredProducts = Products.slice(0, 8); // Show first 8 products as featured

  // Function to handle image loading errors
  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/300x300/cccccc/666666?text=No+Image";
  };

  return (
    <div className="min-h-screen p-10 bg-linear-to-br from-orange-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <section className="mb-12">
          <p className="text-red-500 font-bold tracking-wide m-0">LIMITED-TIME OFFER</p>
          <h1 className="text-6xl leading-tight my-4 text-blue-900">Elevate your wardrobe with premium menswear.</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md">
            Discover curated styles, fast delivery, and exclusive deals across shirts, shoes, accessories, and outerwear.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link to="/products" className="px-6 py-4 bg-blue-800 text-white rounded-full no-underline font-bold">
              Shop All Products
            </Link>
            <Link to="/login" className="px-6 py-4 bg-transparent text-blue-800 border-2 border-blue-800 rounded-full no-underline font-bold">
              Member Login
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Featured Products</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredProducts.map((product) => (
              <div key={product.id} className="p-5 rounded-3xl border border-blue-200 bg-white shadow-lg">
                <img src={product.image} alt={product.name} className="w-full h-48 rounded-2xl object-cover mb-4" onError={handleImageError} />
                <h3 className="my-2 text-blue-800 font-semibold">{product.name}</h3>
                <p className="m-0 text-gray-500 text-sm">{product.brand}</p>
                <p className="font-bold text-blue-800 m-0 mt-2">₹{product.price}</p>
                <p className="m-0 text-gray-500 text-sm">⭐ {product.rating}</p>
                <Link to={`/product/${product.id}`} className="mt-3 inline-block px-4 py-2 bg-blue-800 text-white rounded-full no-underline font-bold text-sm">
                  View Details
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products" className="px-8 py-4 bg-blue-800 text-white rounded-full no-underline font-bold text-lg">
              View All Products →
            </Link>
          </div>
        </section>

        <div className="mt-16 p-8 bg-blue-800 text-white rounded-3xl">
          <div className="flex flex-wrap justify-between gap-5">
            <div>
              <h2 className="m-0">Free shipping</h2>
              <p className="mt-2 text-blue-200">On orders above ₹1000.</p>
            </div>
            <div>
              <h2 className="m-0">Fast delivery</h2>
              <p className="mt-2 text-blue-200">Ships in 24 hours.</p>
            </div>
            <div>
              <h2 className="m-0">Easy returns</h2>
              <p className="mt-2 text-blue-200">30-day return policy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
