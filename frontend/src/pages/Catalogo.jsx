import { useAuth } from "../context/AuthContext";
import { productos } from "../data/productos";

export default function Catalogo() {
  const { usuario, logout } = useAuth();

  return (
    <div>
      <header>
        <h2>JSJ Ferretería</h2>
        <div>
          <span>Carrito (0)</span>
          <span>{usuario?.nombre}</span>
          <button onClick={logout}>Salir</button>
        </div>
      </header>
      <main>
        <input type="text" placeholder="Buscar productos, marcas..." />
        {/* aca van a ir los filtros y las cards de los productos */}
      </main>
    </div>
  );
}