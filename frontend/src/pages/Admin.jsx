import { useAuth } from "../context/AuthContext";
import { productos } from "../data/productos";

export default function Admin() {
  const { usuario, logout } = useAuth();

  return (
    <div>
      <header>
        <h2>JSJ Panel de administración</h2>
        <span>{usuario?.nombre}</span>
        <button onClick={logout}>Salir</button>
      </header>
      <main>
        <button>Nuevo producto</button>
        {/*Aca va a ir la tabla de gestion de productos */}
      </main>
    </div>
  );
}