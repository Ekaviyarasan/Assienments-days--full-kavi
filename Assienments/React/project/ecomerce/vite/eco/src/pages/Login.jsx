import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    const success = login(username, password);

    if (success) {
      alert("Login Successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials. Use admin / 1234");
    }
  };

  return (
    <div className="min-h-80vh flex items-center justify-center bg-blue-50 p-10">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-xl">
        <h2 className="mb-4 text-blue-800 text-center">Member Login</h2>
        <p className="mb-6 text-gray-600 text-center">Enter your credentials to access the dashboard and manage your cart.</p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-4 mb-4 rounded-2xl border border-gray-300"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 mb-5 rounded-2xl border border-gray-300"
        />

        <button
          onClick={handleLogin}
          className="w-full p-4 rounded-2xl border-none bg-blue-800 text-white font-bold cursor-pointer"
        >
          Login
        </button>

        <p className="mt-4 text-gray-500 text-sm text-center">
          Demo credentials: <strong>admin</strong> / <strong>1234</strong>
        </p>
      </div>
    </div>
  );
}

export default Login;

