import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Catalogo from "./pages/Catalogo";
import Admin from "./pages/Admin";
import RutaProtegida from "./components/RutaProtegida";
import { useAuth } from "./context/AuthContext";

function App() {
  const { usuario } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      {/* Redirigi dependiendo del rol que tenga */}
      <Route 
        path="/" 
        element={
          usuario ? (
            usuario.rol === "administrador" ? <Navigate to="/admin" /> : <Navigate to="/catalogo" />
          ) : (
            <Navigate to="/login" />
          )
        } 
      />

      <Route 
        path="/catalogo" 
        element={
          <RutaProtegida>
            <Catalogo />
          </RutaProtegida>
        } 
      />

      <Route 
        path="/admin" 
        element={
          <RutaProtegida rolRequerido="administrador">
            <Admin />
          </RutaProtegida>
        } 
      />
    </Routes>
  );
}

export default App;