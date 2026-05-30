import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { CartContext } from "../Context/CartContext";
import { Products } from "../data/Products";

function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const recommended = Products.filter((product) => product.rating >= 4.5).slice(0, 4);
  const totalCartValue = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen p-10 bg-blue-50">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="p-8 rounded-3xl bg-white shadow-lg">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <p className="text-gray-600 m-0">Welcome back,</p>
              <h1 className="text-2xl text-blue-900 mt-2">{user?.username || "Member"}</h1>
            </div>
            <button
              onClick={logout}
              className="px-6 py-3 rounded-full border-2 border-blue-800 bg-transparent text-blue-800 cursor-pointer font-bold"
            >
              Logout
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-blue-50">
              <p className="text-gray-600 m-0">Cart Items</p>
              <h2 className="text-3xl mt-3">{cart.length}</h2>
            </div>
            <div className="p-6 rounded-3xl bg-blue-50">
              <p className="text-gray-600 m-0">Cart Value</p>
              <h2 className="text-3xl mt-3">₹{totalCartValue}</h2>
            </div>
            <div className="p-6 rounded-3xl bg-blue-50">
              <p className="text-gray-600 m-0">Best Selling</p>
              <h2 className="text-3xl mt-3">Top Picks</h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6">
          <div className="p-8 rounded-3xl bg-white shadow-lg">
            <h2 className="text-xl text-blue-900 mb-4">Quick Actions</h2>
            <div className="flex gap-3 flex-wrap">
              <Link to="/products" className="px-5 py-3 rounded-xl bg-blue-800 text-white no-underline font-bold">
                Browse Products
              </Link>
              <Link to="/cart" className="px-5 py-3 rounded-xl bg-blue-50 text-blue-800 no-underline font-bold">
                View Cart
              </Link>
              <Link to="/ad" className="px-5 py-3 rounded-xl bg-pink-100 text-pink-800 no-underline font-bold">
                Shop Offers
              </Link>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-purple-50 shadow-lg">
            <h2 className="text-xl text-blue-900 mb-4">Today’s Highlights</h2>
            <p className="text-gray-600 mb-6">Recommended products based on our top-rated collection.</p>
            <ul className="space-y-3 list-none p-0 m-0">
              {recommended.map((product) => (
                <li key={product.id} className="bg-white p-4 rounded-xl flex justify-between items-center border border-gray-200">
                  <span>{product.name}</span>
                  <span className="text-blue-800 font-bold">₹{product.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
