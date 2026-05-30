import { useContext } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../Context/WishlistContext";
import { CartContext } from "../Context/CartContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/300x300/cccccc/666666?text=No+Image";
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    // Optionally remove from wishlist after adding to cart
    // removeFromWishlist(product.id);
  };

  return (
    <div className="min-h-screen p-6 bg-blue-50">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">My Wishlist</h2>

        {wishlist.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🤍</div>
            <h3 className="text-xl text-gray-600 mb-4">Your wishlist is empty</h3>
            <p className="text-gray-500 mb-6">Save items you love for later!</p>
            <Link to="/products" className="px-8 py-4 bg-blue-800 text-white rounded-full no-underline font-bold text-lg">
              Browse Products
            </Link>
          </div>
        )}

        {wishlist.length > 0 && (
          <>
            <div className="mb-6 text-gray-600">
              {wishlist.length} item{wishlist.length !== 1 ? 's' : ''} in your wishlist
            </div>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {wishlist.map((product) => (
                <div key={product.id} className="border border-gray-200 rounded-3xl bg-white p-5 shadow-lg flex flex-col items-center gap-3">
                  <div className="relative w-full flex justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-56 rounded-2xl object-cover"
                      onError={handleImageError}
                    />
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="text-center">
                    <h3 className="my-2 text-blue-900">{product.name}</h3>
                    <p className="m-0 text-gray-500">{product.brand}</p>
                  </div>
                  <p className="font-bold text-blue-800 m-0">₹{product.price}</p>
                  <p className="m-0 text-gray-500">⭐ {product.rating}</p>
                  <div className="flex gap-3 flex-wrap justify-center">
                    <Link to={`/product/${product.id}`}>
                      <button className="px-5 py-3 rounded-xl border border-blue-800 bg-transparent text-blue-800 cursor-pointer font-bold">
                        View Details
                      </button>
                    </Link>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="px-5 py-3 rounded-xl border-none bg-blue-800 text-white cursor-pointer font-bold"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Wishlist;