import Header from "../components/Header";
import { useProductos} from "../context/ProductoContext"
import {Formulario} from "../components/Formulario"
import "./Admin.css";

export default function Admin() {

const { productos, borrar, setProductoEditando } = useProductos();
  return (
    <div className="contenedor-pagina">
      <Header titulo="Panel de administración" />
      
      <main>
        <div className="admin-acciones">
          <p>{productos.length} productos</p>
          <Formulario />
        </div>

        <table className="tabla-admin">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.nombre}</td>
                <td>$ {Number(producto.precio || 0 ).toLocaleString("es-AR")}</td>
                <td>
                  {producto.stock} 
                  {/*si el stock es menor a 5, muestra la etiqueta "bajo" */}
                  {producto.stock < 5 && <span className="stock-critico">bajo</span>}
                </td>
                <td className="acciones-celda">
                  <button className="btn-icono" onClick={() => setProductoEditando(producto)}>✏️</button>
                  <button className="btn-icono" onClick={ () => borrar(producto.id)}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}