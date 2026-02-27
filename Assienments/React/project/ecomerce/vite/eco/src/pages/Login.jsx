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
       navigate("/");
     } else {
       alert("Invalid Credentials");
     }
   };

   return (
     <div style={{ padding: "40px", textAlign: "center" }}>
       <h2>Login</h2>

       <input
         type="text"
         placeholder="Username"
         value={username}
         onChange={(e) => setUsername(e.target.value)}
         style={{ padding: "8px", margin: "10px" }}
       />

       <br />

       <input
         type="password"
         placeholder="Password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         style={{ padding: "8px", margin: "10px" }}
       />

       <br />

       <button
         onClick={handleLogin}
         style={{
           padding: "10px 20px",
           background: "black",
           color: "white",
           border: "none",
         }}
       >
        Login
       </button>
     </div>
   );
 }

 export default Login;

