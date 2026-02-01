

// /* ---------------- LOGIN FORM ---------------- */

// function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [submittedData, setSubmittedData] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Both fields are required");
//       return;
//     }

//     setError("");
//     setSubmittedData({ email, password });

//     // Clear form
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <div style={styles.card}>
//       <h2>Login</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         {error && <p style={styles.error}>{error}</p>}

//         <button type="submit">Login</button>
//       </form>

//       {submittedData && (
//         <div style={styles.result}>
//           <strong>Login Data:</strong>
//           <p>Email: {submittedData.email}</p>
//           <p>Password: {submittedData.password}</p>
//         </div>
//       )}
//     </div>
//   );
// }
// export default LoginForm

