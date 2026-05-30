import { useParams } from "react-router-dom";
import { Products } from "../data/Products";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useContext(WishlistContext);
  const [message, setMessage] = useState("");
  const [quantity, setQuantity] = useState(1);

  const product = Products.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return (
      <div className="min-h-screen p-10 bg-blue-50 flex items-center justify-center">
        <div className="bg-white rounded-3xl p-10 shadow-lg text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Product Not Found</h2>
          <p className="text-gray-600">The product you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setMessage(`✅ ${quantity} ${product.name}${quantity > 1 ? "s" : ""} added to cart!`);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      setMessage("❤️ Removed from wishlist");
    } else {
      addToWishlist(product);
      setMessage("💚 Added to wishlist");
    }

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/400x400/cccccc/666666?text=No+Image";
  };

  return (
    <div className="min-h-screen p-6 bg-blue-50">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8">
        {message && (
          <div className="mb-6 rounded-2xl bg-green-100 px-6 py-4 text-green-800 font-semibold text-center">
            {message}
          </div>
        )}

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-6">
            <img
              src={product.image}
              alt={product.name}
              onError={handleImageError}
              className="w-full rounded-3xl object-cover shadow-lg max-h-[520px]"
            />

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="bg-blue-50 rounded-3xl p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-800">Category</p>
                <p className="mt-2 font-semibold text-blue-900">{product.category}</p>
              </div>
              <div className="bg-blue-50 rounded-3xl p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-800">Brand</p>
                <p className="mt-2 font-semibold text-blue-900">{product.brand}</p>
              </div>
              <div className="bg-blue-50 rounded-3xl p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-800">Stock</p>
                <p className="mt-2 font-semibold text-blue-900">{product.stock}</p>
              </div>
              <div className="bg-blue-50 rounded-3xl p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-800">Rating</p>
                <p className="mt-2 font-semibold text-blue-900">{product.rating}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-blue-900">{product.name}</h1>
              <p className="mt-3 text-xl text-gray-600">{product.description}</p>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-blue-800">Price</p>
                  <p className="mt-2 text-3xl font-bold text-blue-900">₹{product.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm uppercase tracking-[0.2em] text-blue-800">Delivery</p>
                  <p className="mt-2 font-semibold text-green-700">{product.delivery || "Standard delivery"}</p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {product.color && (
                  <p className="text-gray-700"><b>Color:</b> {product.color}</p>
                )}
                {product.size && (
                  <p className="text-gray-700"><b>Size:</b> {product.size}</p>
                )}
                {product.material && (
                  <p className="text-gray-700"><b>Material:</b> {product.material}</p>
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-12 w-12 rounded-full bg-blue-50 text-blue-900 font-bold"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  max={product.stock}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Math.min(product.stock, parseInt(e.target.value) || 1)))}
                  className="w-20 rounded-2xl border border-blue-100 p-3 text-center"
                />
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="h-12 w-12 rounded-full bg-blue-50 text-blue-900 font-bold"
                >
                  +
                </button>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <button
                  onClick={handleAddToCart}
                  className="px-6 py-4 rounded-full bg-blue-800 text-white font-bold hover:bg-blue-900"
                >
                  Add to Cart - ₹{product.price * quantity}
                </button>
                <button
                  onClick={handleWishlistToggle}
                  className={`px-6 py-4 rounded-full font-bold ${isInWishlist(product.id) ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800"}`}
                >
                  {isInWishlist(product.id) ? "❤️ Remove from Wishlist" : "🤍 Add to Wishlist"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;