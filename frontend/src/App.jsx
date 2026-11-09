import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Catalogo from "./pages/Catalogo";
import Admin from "./pages/Admin";
import Vendedor from "./pages/Vendedor";
import RutaProtegida from "./components/RutaProtegida";
import { useAuth } from "./context/AuthContext";
import { ProductoProvider } from "./context/ProductoContext";

function App() {
  const { usuario } = useAuth();

  return (
    <ProductoProvider>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Redirige dependiendo del rol que tenga */}
        <Route
          path="/"
          element={
            usuario ? (
              usuario.rol === "administrador" ? <Navigate to="/admin" /> :
              usuario.rol === "vendedor" ? <Navigate to="/vendedor" /> :
              <Navigate to="/catalogo" />
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

        <Route
          path="/vendedor"
          element={
            <RutaProtegida rolRequerido="vendedor">
              <Vendedor />
            </RutaProtegida>
          }
        />
      </Routes>
    </ProductoProvider>
  );
}

export default App;