 import { createContext, useState } from "react";

 export const AuthContext = createContext();

 export const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   const login = (username, password) => {
     // Simple fake login (you can improve later)
     if (username === "admin" && password === "1234") {
       setUser({ username });
       return true;
     }
     return false;
   };

   const logout = () => {
     setUser(null);
   };

   return (
     <AuthContext.Provider value={{ user, login, logout }}>
       {children}
     </AuthContext.Provider>
   );
 };


// import { createContext, useState } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const login = (username, password) => {
//     if (username === "admin" && password === "1234") {
//       setUser({ username });
//       return true;
//     }
//     return false;
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };