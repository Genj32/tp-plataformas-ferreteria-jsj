import { createContext, useContext, useState } from "react";
import { usuarios } from "../data/usuarios";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  function login(email, password) {
    const user = usuarios.find((u) => u.email === email && u.password === password);
    if (user) {
      setUsuario(user);
      return true;
    }
    return false;
  }

  function logout() {
    setUsuario(null);
  }

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}