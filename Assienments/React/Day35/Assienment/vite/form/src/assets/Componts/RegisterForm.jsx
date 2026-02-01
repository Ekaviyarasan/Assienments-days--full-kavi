// function RegisterForm() {
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

//     if (password.length < 6) {
//       setError("Password must be at least 6 characters");
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
//       <h2>Register</h2>

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

//         <button type="submit">Register</button>
//       </form>

//       {submittedData && (
//         <div style={styles.result}>
//           <strong>Registration Data:</strong>
//           <p>Email: {submittedData.email}</p>
//           <p>Password: {submittedData.password}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// /* ---------------- STYLES ---------------- */

// const styles = {
//   page: {
//     padding: "40px",
//     background: "#f4f4f4",
//     minHeight: "100vh",
//     fontFamily: "Arial"
//   },
//   card: {
//     maxWidth: "400px",
//     margin: "20px auto",
//     padding: "20px",
//     background: "#fff",
//     borderRadius: "6px",
//     boxShadow: "0 0 10px rgba(0,0,0,0.1)"
//   },
//   error: {
//     color: "red",
//     fontSize: "14px"
//   },
//   result: {
//     background: "#e8f5e9",
//     padding: "10px",
//     marginTop: "10px",
//     borderRadius: "4px"
//   }
// };

// export default App;
