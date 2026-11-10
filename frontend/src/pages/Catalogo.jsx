import { useState } from "react";
import Header from "../components/Header";
import ProductoCard from "../components/ProductoCard";
import { useProductos } from "../context/ProductoContext"; 
import "./Catalogo.css";

export default function Catalogo() {

  const { productos } = useProductos();

  const [busqueda, setBusqueda] = useState("");
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");

  const categorias = ["Todos", "Herramientas", "Construcción", "Pintura", "Sanitarios"];

  const productosFiltrados = productos.filter((producto) => {
    const coincideBusqueda = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());

    const coincideCategoria = categoriaActiva === "Todos" || producto.categoria === categoriaActiva;

    return coincideBusqueda && coincideCategoria;
  });

  return (
    <div className= "contenedor-pagina">
      <Header titulo="Ferreteria"/>

      <main>
        <input 
          type="text"
          placeholder="Buscar producto, marcas..."
          className="input-busqueda"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      
        <div className="filtros">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              className={categoriaActiva === categoria ? "filtro-activo" : ""}
              onClick={() => setCategoriaActiva(categoria)}
            >
              {categoria}
            </button>
          ))}
        </div>
          
        <div className="grilla-productos">
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((producto) => (
              <ProductoCard key={producto.id} producto={producto} />
            ))
          ) : (
            <p className="mensaje-vacio" style= {{ color: "var(--text-muted)", fontSize: "20px"}}>
              No se encontraron porductos que coincidan con la búsqueda o categoría seleccionada.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
