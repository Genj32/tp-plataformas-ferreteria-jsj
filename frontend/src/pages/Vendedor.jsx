import Header from "../components/Header";
import { useProductos } from "../context/ProductoContext"
import "./Admin.css"

export default function Vendedor() {
  const { productos } = useProductos();

  
  return (
    <div className="contenedor-pagina">
      <Header titulo="Panel de Vendedor" />

      <main>
        <p>{productos.length} productos</p>
      </main>
    </div>
  );
}