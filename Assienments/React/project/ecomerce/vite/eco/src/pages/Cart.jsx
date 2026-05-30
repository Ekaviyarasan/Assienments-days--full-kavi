


import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalItems, getTotalPrice } = useContext(CartContext);
  const [notification, setNotification] = useState("");

  const handleQuantityChange = (id, newQuantity) => {
    updateQuantity(id, parseInt(newQuantity));
  };

  const handleBuy = () => {
    setNotification("🎉 Order placed successfully! Thank you for shopping!");
    clearCart();
    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/100x100/cccccc/666666?text=No+Image";
  };

  return (
    <div className="min-h-screen p-6 bg-blue-50">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Your Shopping Cart</h2>

        {notification && (
          <div className="bg-green-100 text-green-800 p-4 rounded-2xl mb-6 font-semibold">
            {notification}
          </div>
        )}

        {cart.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🛒</div>
            <h3 className="text-xl text-gray-600 mb-4">Your cart is empty</h3>
            <p className="text-gray-500 mb-6">Add some products to get started!</p>
            <Link to="/products" className="px-8 py-4 bg-blue-800 text-white rounded-full no-underline font-bold text-lg">
              Shop Products
            </Link>
          </div>
        )}

        {cart.length > 0 && (
          <>
            <div className="space-y-4 mb-8">
              {cart.map((item) => (
                <div key={item.id} className="flex flex-wrap items-center justify-between p-6 bg-gray-50 rounded-2xl gap-4">
                  <div className="flex items-center gap-4 flex-1 min-w-64">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-xl object-cover"
                      onError={handleImageError}
                    />
                    <div>
                      <h4 className="font-semibold text-blue-900">{item.name}</h4>
                      <p className="text-gray-600">{item.brand}</p>
                      <p className="text-blue-800 font-bold">₹{item.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                        className="w-16 text-center p-2 border rounded-lg"
                      />
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-bold text-blue-900 min-w-20 text-right">
                      ₹{item.price * item.quantity}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-6">
              <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                <div className="text-lg">
                  <span className="text-gray-600">Total Items: </span>
                  <span className="font-bold text-blue-900">{getTotalItems()}</span>
                </div>
                <div className="text-2xl font-bold text-blue-900">
                  Total: ₹{getTotalPrice()}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={clearCart}
                  className="px-6 py-3 bg-gray-500 text-white rounded-full font-bold hover:bg-gray-600"
                >
                  Clear Cart
                </button>
                <Link
                  to="/products"
                  className="px-6 py-3 bg-blue-600 text-white rounded-full no-underline font-bold hover:bg-blue-700"
                >
                  Continue Shopping
                </Link>
                <button
                  onClick={handleBuy}
                  className="px-8 py-3 bg-green-600 text-white rounded-full font-bold hover:bg-green-700"
                >
                  Checkout Now
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;





