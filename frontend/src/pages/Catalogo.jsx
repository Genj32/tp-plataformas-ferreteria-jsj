import Header from "../components/Header";
import ProductoCard from "../components/ProductoCard";
import { productos } from "../data/productos";
import "./Catalogo.css";

export default function Catalogo() {
  return (
    <div>
      {/* Pasamos el título por prop */}
      <Header titulo="Ferretería" />
      
      <main>
        <input type="text" placeholder="Buscar productos, marcas..." className="input-busqueda" />
        {/* Filtros de categorías */}
        <div className="filtros">
          <button className="filtro-activo">Todos</button>
          <button>Herramientas</button>
          <button>Construcción</button>
          <button>Pintura</button>
          <button>Sanitarios</button>
        </div>

        {/* Grilla dinámica de productos */}
        <div className="grilla-productos">
          {productos.map((producto) => (
            <ProductoCard key={producto.id} producto={producto} />
          ))}
        </div>
      </main>
    </div>
  );
}