import { useAuth } from "../context/AuthContext";

export default function Inicio() {
  const { usuario, logout } = useAuth();

  return (
    <div>
      <h1>Bienvenido, {usuario?.nombre}</h1>
      <p>Rol: {usuario?.rol}</p>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
}