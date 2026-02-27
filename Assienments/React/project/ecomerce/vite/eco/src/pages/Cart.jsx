


import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const [notification, setNotification] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleBuy = () => {
    setNotification("🎉 Buying Successfully, Thank You!");

    // Clear notification after 3 seconds
    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {/* ✅ Notification */}
      {notification && (
        <div
          style={{
            background: "#0cece1",
            color: "#0d9bec",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "15px",
            fontWeight: "bold",
          }}
        >
          {notification}
        </div>
      )}

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item, index) => (
        <div key={index}>
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h3>Total: ₹{total}</h3>

          <button
            onClick={handleBuy}
            style={{
              padding: "10px 20px",
              background: "green",
              color: "white",
              border: "none",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            Buy Now
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;