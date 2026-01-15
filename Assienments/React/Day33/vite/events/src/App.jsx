import { useState } from "react";

export default function App() {
  // Counter state
  const [count, setCount] = useState(0);

  // Toggle text state
  const [isVisible, setIsVisible] = useState(true);

  // Input value state
  const [inputValue, setInputValue] = useState("");

  // Button text state
  const [buttonText, setButtonText] = useState("Click Me");

  // Show/Hide profile state
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="p-6 space-y-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">React State Practice</h1>

      {/* Counter */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Counter</h2>
        <p className="text-lg">Count: {count}</p>
        <div className="space-x-2">
          <button onClick={() => setCount(count + 1)} className="px-3 py-1 bg-blue-500 text-white rounded">+</button>
          <button onClick={() => setCount(count - 1)} className="px-3 py-1 bg-red-500 text-white rounded">–</button>
          <button onClick={() => setCount(0)} className="px-3 py-1 bg-gray-500 text-white rounded">Reset</button>
        </div>
      </div>

      {/* Toggle Text */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Toggle Text</h2>
        {isVisible && <p>Hello! This text can be toggled.</p>}
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="px-3 py-1 bg-purple-500 text-white rounded"
        >
          Toggle Text
        </button>
      </div>

      {/* Input Value */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Live Input</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border p-2 w-full"
          placeholder="Type something..."
        />
        <p>You typed: {inputValue}</p>
      </div>

      {/* Change Button Text */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Change Button Text</h2>
        <button
          onClick={() => setButtonText("Button Clicked!")}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          {buttonText}
        </button>
      </div>

      {/* Show/Hide Profile */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Show / Hide Profile</h2>
        <button
          onClick={() => setShowProfile(!showProfile)}
          className="px-3 py-1 bg-indigo-500 text-white rounded"
        >
          {showProfile ? "Hide Profile" : "Show Profile"}
        </button>

        {showProfile && (
          <div className="border p-3 rounded">
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Role:</strong> React Developer</p>
          </div>
        )}
      </div>
    </div>
  );
}
