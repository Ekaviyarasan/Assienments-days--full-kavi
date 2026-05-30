

import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useContext(WishlistContext);

  // Function to handle image loading errors
  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/300x300/cccccc/666666?text=No+Image";
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="border border-gray-200 rounded-3xl bg-white p-5 shadow-lg flex flex-col items-center gap-3">
      <div className="relative w-full flex justify-center">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-56 rounded-2xl object-cover" 
          onError={handleImageError}
        />
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center ${
            isInWishlist(product.id) ? 'bg-red-500 text-white' : 'bg-white text-gray-400'
          } shadow-lg`}
        >
          {isInWishlist(product.id) ? '❤️' : '🤍'}
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
          onClick={() => addToCart(product)}
          className="px-5 py-3 rounded-xl border-none bg-blue-800 text-white cursor-pointer font-bold"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;