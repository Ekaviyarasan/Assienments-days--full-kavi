import { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [todos, setTodos] = useState(["Learn React", "Practice State"]);
  const [newTodo, setNewTodo] = useState("");

  const cities = ["New York", "London", "Tokyo", "Paris", "Sydney"];

  const products = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Headphones", price: 150 }
  ];

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  return (
    <div className="p-6 space-y-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">React Conditional Rendering Practice</h1>

      {/* Logged In / Logged Out */}
      <div className="space-y-2">
        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          Toggle Login
        </button>
        <p className="font-semibold">
          {isLoggedIn ? "Logged In" : "Logged Out"}
        </p>
      </div>

      {/* Cities List */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Cities</h2>
        <ul className="list-disc pl-5">
          {cities.map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
      </div>

      {/* && Operator */}
      <div className="space-y-2">
        {isLoggedIn && <p className="text-green-600">Welcome back, user!</p>}
      </div>

      {/* Todo List UI */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Todo List</h2>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="border p-2 w-full"
          placeholder="Add a todo"
        />
        <button
          onClick={addTodo}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          Add Todo
        </button>
        <ul className="list-disc pl-5">
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>

      {/* Product List */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Products</h2>
        <ul className="space-y-1">
          {products.map((product) => (
            <li key={product.id} className="border p-2 rounded">
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
